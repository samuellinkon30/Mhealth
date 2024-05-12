<template>
    <div class="global_calendar">
        <div class="sidebarCalendar">
            <FullCalendar 
            :options="calendarOptions2" 
          />
        </div>
       <Calendar></Calendar>
    </div>
    
</template>

<script>
import Calendar from "@/components/Calendar.vue"
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { mapState } from 'vuex'


export default{
    data(){
        return{
        calendarOptions2: {
        plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin], 
        initialView: 'dayGridMonth',
        weekends: true,
        locale: 'pt-br',
        selectable: true,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick, 
       
        events: [  
          {
            // title: 'Evento Exemplo',
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
        }
    },
    methods:{
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
        //   title: `Consulta Exemplo - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'red',
          allow: 'true'
        });

        events.push({
        //   title: `Consulta Exemplo 2 - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'blue'
          
        });
        events.push({
        //   title: `Consulta Exemplo 3 - ${d.getDate()}`,
          start: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          description: 'Descrição do evento exemplo',
          backgroundColor: 'purple'
        });
      }

      this.calendarOptions2.events = events;
    }
    },
    mounted() {
   this.generateEvents();
  // this.getAtendimentos();
  },
    components:{
        FullCalendar,
        Calendar
    }
}
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
    background-color: #f1f1f1 !important;
    padding: 10px;
    min-height: 88vh;
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
.sidebarCalendar .fc-header-toolbar.fc-toolbar {
    display: none;
}
.sidebarCalendar .fc-scroller.fc-scroller-liquid-absolute{
    overflow: hidden!important;
}
</style>