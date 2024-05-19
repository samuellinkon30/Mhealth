<template>
  <FullCalendar :options="calendarOptions" ref="calendar" :class="[showHorarioLivre? 'calendarFreeTime fc fc-media-screen fc-direction-ltr fc-theme-standard':'calendar fc fc-media-screen fc-direction-ltr fc-theme-standard']" />
  <div v-show="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ modalEvent.title }}</h2>
      <div v-html="modalEvent.content"></div>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { mapState } from 'vuex';
import api from '@/utils/atendimentos/atendimento.js';

import tippy from 'tippy.js';

export default {
  components: {
    FullCalendar
  },
  props: {
    showFreeTimeProps: Boolean,
    especialidade: Number,
    especialista: Number
  },
  data() {
    return {
      showHorarioLivre: false,
      calendarOptions: {
        plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        locale: 'pt-br',
        selectable: true,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        navLinks: true,
        nowIndicator: true,
        slotMinTime: '08:00',
        slotMaxTime: '21:00',
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek,timeGridDay'
        },
        buttonText: {
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        },
        events: [],
      },
      modalOpen: false,
      modalEvent: {
        title: '',
        content: ''
      }
    };
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    async getAtendimentos() {
      try {
        const response = await api.getListAtendimentos(this.token, this.especialidade, this.especialista);
        console.log(response);
        this.dataAtendimentos = response;
        this.addEvents(response);
      } catch (error) {
        console.error('Erro ao obter os atendimentos:', error);
      }
    },
    handleDateClick(arg) {
      // Aqui você pode fazer o que desejar quando uma data é clicada
    },
    handleEventClick(arg) {
      this.show = true;
      this.openModal(arg.event);
      console.log('Título do evento clicado:', arg.event.title);
    },
    toggleView() {
      if (this.calendarOptions.initialView === 'dayGridMonth') {
        this.calendarOptions.initialView = 'timeGridDay';
      } else {
        this.calendarOptions.initialView = 'dayGridMonth';
      }
      this.$refs.calendar.getApi().destroy();
      this.$nextTick(() => {
        this.$refs.calendar.initPlugin();
      });
    },
    closeModal() {
      this.show = false;
      this.modalEvent.title = '';
      this.modalEvent.content = '';
    },
    openModal(event) {
      this.modalOpen = true;
      this.modalEvent.title = event.title;
      this.modalEvent.content = `<p>${event.extendedProps.description}</p>`;
      tippy(event.el, {
        content: event.extendedProps.description,
        placement: 'top',
        animation: 'shift-toward',
      });
    },
    addEvents(data) {
      let events = [];
      let startTime = '09:00'; // Hora de início do dia
      let endTime = '18:00'; // Hora de término do dia
      let interval = 60; // Intervalo de 1 hora em minutos

      // Adiciona os eventos dos atendimentos
      data.forEach(item => {
        console.log(item.data + ' ' + item.horario);
        events.push({
          title: item.marcacao.paciente.nome,
          start: item.data + ' ' + item.horario,
          end: item.data + ' ' + item.horario, // Duração de 1 hora
          content: `${item.marcacao.paciente.nome}`, // Adicionar a descrição como conteúdo HTML
          backgroundColor: 'red',
          allow: true,
          className: 'horario-prenchido',
        });
      });

      // Adiciona eventos "horário livre" nos horários disponíveis para todos os dias do mês
      let currentDate = new Date();
      let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      let lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      let currentDay = new Date(firstDay);
      while (currentDay <= lastDay) {
        let currentTime = new Date('2000-01-01T' + startTime); // Inicializa a hora do dia
        let endOfDay = new Date('2000-01-01T' + endTime); // Hora de término do dia
        while (currentTime <= endOfDay) {
          let found = events.some(event => {
            let eventTime = new Date(event.start);
            return eventTime.getDate() === currentDay.getDate() &&
              eventTime.getHours() === currentTime.getHours() &&
              eventTime.getMinutes() === currentTime.getMinutes();
          });
          if (!found) {
            let timeStr = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;
            events.push({
              title: 'Horário Livre',
              start: this.formatDate(currentDay) + ' ' + timeStr,
              end: this.formatDate(currentDay) + ' ' + timeStr, // Duração de 1 hora
              className: 'horario-livre', // Adiciona uma classe para os eventos "horário livre"
              backgroundColor: 'green',
              allow: true
            });
          }
          currentTime.setMinutes(currentTime.getMinutes() + interval);
        }
        currentDay.setDate(currentDay.getDate() + 1); // Avança para o próximo dia
      }

      this.calendarOptions.events = events;
    },
    addMinutes(time, minutes) {
      let [hours, mins] = time.split(':').map(Number);
      mins += minutes;
      hours += Math.floor(mins / 60);
      mins %= 60;
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    },
    formatDate(date) {
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
      let yyyy = date.getFullYear();
      return yyyy + '-' + mm + '-' + dd;
    },
    toggleHorarioLivre() {
      this.showFreeTime = !this.showFreeTime;
      this.showHorarioLivre = !this.showHorarioLivre;
      let calendarApi = this.$refs.calendar.getApi();
      let events = calendarApi.getEvents();
      for (let i = 0; i < events.length; i++) {
        if (events[i].className && events[i].className.includes('horario-livre')) {
          events[i].display = this.showHorarioLivre ? 'auto' : 'none';
        }
      }
      calendarApi.refetchEvents();
    }
  },
  mounted() {
    this.getAtendimentos();
  },
  watch: {
    showFreeTimeProps(novovalor) {
      this.showHorarioLivre = novovalor;
    },
    especialidade(newValue) {
      this.getAtendimentos();
    },
    especialista(newValue) {
      this.getAtendimentos();
    }
  }
};
</script>


<style >
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.calendar .horario-livre {
  display: none;
}
.calendarFreeTime .horario-prenchido{
  display: none;
}

</style>