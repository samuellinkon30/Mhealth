<template>
    <div class="global_calendar">
      <div class="sidebarCalendar">
        <v-autocomplete
          clearable
          variant="outlined"
          label="Selecione o Especialidade"
          :items="especialidades.map(item => item.nome)"
          item-value="id"
          item-text="nome"
          v-model="especialidade"
          @change="updateEspecialidade"
        ></v-autocomplete>
        
        <v-autocomplete
          clearable
          variant="outlined"
          label="Selecione o Especialista"
          :items="especialistas.map(item => item.nome)"
          item-value="id"
          item-text="nome" 
          v-model="especialista"
          @change="updateEspecialista"
        ></v-autocomplete>
        
        <FullCalendar :options="calendarOptions2" />
        
        <button class="btn" @click="changeViewFreeSlots()">Mostrar horários Livres</button>
      </div>
      
      <Calendar :showFreeTimeProps="showFreeTimeProps" :especialidade="especialidade" :especialista="especialista" />
    </div>
  </template>
  
  <script>
  import Calendar from "@/components/Calendar.vue";
  import FullCalendar from '@fullcalendar/vue3';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import { mapState } from 'vuex';
  import api from '@/utils/atendimentos/atendimento.js';
  import apiEspecialistas from '@/utils/especialistas/especialista.js';
  import apiEspecialidades from '@/utils/especialidades/especialidade.js';
  
  export default {
    data() {
      return {
        showFreeTimeProps: false,
        especialista: null, // Aqui definimos o v-model como null
        especialidade: null, // Aqui definimos o v-model como null
        especialistas: [],
        especialidades: [],
        calendarOptions2: {
          plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin],
          initialView: 'dayGridMonth',
          weekends: true,
          locale: 'pt-br',
          selectable: true,
          dateClick: this.handleDateClick,
          eventClick: this.handleEventClick,
          headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: ''
          },
          events: []
        },
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
          console.error(error);
        }
      },
      async getEspecialidades() {
        try {
          const response = await apiEspecialidades.getListEspecialidades(this.token);
          this.especialidades = response;
          console.log(this, this.especialidades);
        } catch (error) {
          console.error(error);
        }
      },
      async getEspecialistas() {
        try {
          const response = await apiEspecialistas.getListEspecialistas(this.token);
          this.especialistas = response;
        } catch (error) {
          console.error(error);
        }
      },
      changeViewFreeSlots() {
        this.showFreeTimeProps = !this.showFreeTimeProps;
        this.getAtendimentos();
      },
      updateEspecialidade() {
        this.getAtendimentos();
      },
      updateEspecialista() {
        this.getAtendimentos();
      },
      handleDateClick(arg) {
        // Aqui você pode fazer o que desejar quando uma data é clicada
      },
      handleEventClick(arg) {
        // Aqui você pode fazer o que desejar quando um evento é clicado
      },
      addEvents(data) {
        // Código para adicionar eventos ao calendário
      },
    },
    mounted() {
      this.getEspecialidades();
      this.getEspecialistas();
    },
    components: {
      FullCalendar,
      Calendar
    }
  };
</script>
<style>
.global_calendar {
    display: flex;
    width: 100%;
}
.fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
    width: 75%;
    padding: 10px;
    background: white;
}
.sidebarCalendar {
    width: 25%;
    background-color: #ffffff !important;
    padding: 10px;
    min-height: 88vh;
    box-shadow: 7px 2px 20px -5px #c4c4c4;
}
.sidebarCalendar .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
    width: 100%;
    height: 405px;
}
.sidebarCalendar .fc .fc-daygrid-day-frame {
    min-height: 100%;
    position: relative;
    height: 9px;
}

.sidebarCalendar .fc-scroller.fc-scroller-liquid-absolute{
    overflow: hidden!important;
}
.sidebarCalendar .fc-event-time{
    display: none;
}
.sidebarCalendar .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{
    display: flex;
    justify-content: center;
    min-width: 10px !important;
    height: 10px !important;
}
.sidebarCalendar .fc-daygrid-event-dot{
    margin: 0;
}
.sidebarCalendar .fc-theme-standard td, .fc-theme-standard th, .sidebarCalendar .fc-theme-standard .fc-scrollgrid {
    border: 1px solid #fff;
}
.sidebarCalendar .fc .fc-daygrid-day-top {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
}
.sidebarCalendar td.fc-day.fc-day-mon.fc-day-today.fc-daygrid-day .fc-daygrid-day-top {
    background-color: #483c6b;
    color: white;
    border-radius: 50%;
    width: 30px;
    margin: 0 auto;
}
.sidebarCalendar .fc .fc-daygrid-day.fc-day-today {
    background-color: rgb(255 255 255 / 15%);
}
button.btn {
    background-color: #33265d;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
.sidebarCalendar .fc-event-title {
    display: none;
}
.sidebarCalendar .fc-button-group {
    display: flex !important;
    justify-content: space-between !important;
    gap: 65%;
}
.sidebarCalendar .fc-header-toolbar.fc-toolbar.fc-toolbar-ltr {
    display: block !important;
    position: relative;
}
.sidebarCalendar .fc-header-toolbar.fc-toolbar.fc-toolbar-ltr > div:nth-child(2) {
    /* display: none; */
    position: absolute;
    top: 12px;
    left: 84px;
    font-size: 11px;
}
</style>