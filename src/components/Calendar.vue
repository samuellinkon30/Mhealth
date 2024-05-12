<template>
  <FullCalendar 
    :options="calendarOptions" 
  />
  <div v-show="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ modalEvent.title }}</h2>
      <p>{{ modalEvent.description }}</p>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { mapState } from 'vuex'
import api from '@/utils/atendimentos/atendimento.js'

export default {
  components: {
    FullCalendar // torna a tag <FullCalendar> disponível
  },
  data() {
    return {
      calendarOptions: {
        plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin], 
        initialView: 'dayGridMonth',
        weekends: false,
        locale: 'pt-br',
        selectable: true,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick, 
        headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridWeek,dayGridDay,dayGridMonth'
      },
        events: [  
          {
            title: 'Evento Exemplo',
            start: '2024-05-01', 
            description: 'Descrição do evento exemplo',
            // { label: 'Título', value: arg.event.title },
            // { label: 'Data de início', value: arg.event.start },
            // { label: 'Data de fim', value: arg.event.end },
            // { label: 'Descrição', value: arg.event.extendedProps.description },
            // { label: 'backgroundColor', value: arg.event.backgroundColor },
            // { label: 'borderColor', value: arg.event.borderColor },
            // { label: 'allDay', value: arg.event.allDay },
            // { label: 'allow', value: arg.event.allow },
            // { label: 'classNames', value: arg.event.classNames },
            // { label: 'constraint', value: arg.event.constraint },
            // { label: 'display', value: arg.event.display },
            // { label: 'durationEditable', value: arg.event.durationEditable },
            // { label: 'endStr', value: arg.event.endStr },
            // { label: 'groupId', value: arg.event.groupId },
            // { label: 'id', value: arg.event.id },
            // { label: 'overlap', value: arg.event.overlap },
            // { label: 'source', value: arg.event.source },
            // { label: 'startEditable', value: arg.event.startEditable },
            // { label: 'startStr', value: arg.event.startStr },
            // { label: 'textColor', value: arg.event.textColor },
            // { label: 'url', value: arg.event.url }
            
          }
        ],
      },
      modalOpen: false,
      show:false,
      modalEvent: {
        title: '',
        description: ''
      }
    }
  },
  computed:{
    ...mapState(['token'])
  },
  methods: {
    async getAtendimentos(){
      try {
        const response = await api.getListAtendimentos(this.token);
        console.log(response);
        this.dataAtendimentos = response;
      } catch (error) {
        
      }
    },
    handleDateClick(arg) {
      // Aqui você pode fazer o que desejar quando uma data é clicada
    },
    handleEventClick(arg) {
      this.show=true;
      this.openModal(arg.event);
      console.log('Título do evento clicado:', arg.event.title);
    },
    toggleView() {
      console.log(this.calendarOptions.initialView )
      if (this.calendarOptions.initialView === 'dayGridMonth') {
        this.calendarOptions.initialView = 'timeGridDay'; // Correção: 'timeGridDay'
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
      this.modalEvent.description = '';
    },
    openModal(event) {
      this.modalOpen = true;
      this.modalEvent.title = event.title;
      this.modalEvent.description = event.extendedProps.description;
    },
    addEvents(data){
      let events = [];

      data.forEach(element => {
        events.push({
          title: `Consulta Exemplo - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'red',
          allow: 'true'
        });
      });
      this.calendarOptions.events = events;
    },
    generateEvents() {
      const firstDay = new Date();
      firstDay.setDate(1);

      // Obtém o último dia do mês atual
      const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);

      // Array para armazenar os eventos
      let events = [];

      // Itera sobre todos os dias do mês
      for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
        // Cria um evento para cada dia
        events.push({
          title: `Consulta Exemplo - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'red',
          allow: 'true'
        });

        events.push({
          title: `Consulta Exemplo 2 - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'blue'
          
        });
        events.push({
          title: `Consulta Exemplo 3 - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'purple'
        });
      }

      this.calendarOptions.events = events;
    }
  },
  mounted() {
   this.generateEvents();
  // this.getAtendimentos();
  },
  created(){
    // this.getAtendimentos();
  }
}
</script>

<style scoped>
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
</style>
