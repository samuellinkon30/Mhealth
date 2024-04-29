import { createRouter, createWebHistory } from "vue-router";

//Agenda
import Calendar from "@/views/schedule/Calendar.vue";
import Schedule from "@/views/schedule/Schedule.vue";
import WaitingList from "@/views/schedule/WaitingList.vue";
import PanelDay from "@/views/schedule/PanelDay.vue"

//Pacientes
import NewPatient from "@/views/patient/NewPatient.vue";
import SearchPatient from "@/views/patient/SearchPatient.vue";
import ExportPatient from "@/views/patient/ExportPatient.vue";

import Login from "../views/Login.vue";
// import Home from "@/views/HomeView.vue";
import Dashboard from "@/views/utils/Dashboard.vue";
import Panel from "@/views/Panel.vue"


const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: '/dashboard/home', 
        component: Panel
      },
      {
        path: '/dashboard/novo-agendamento', 
        component: Schedule
      },
      {
        path: '/dashboard/lista-de-espera', 
        component: WaitingList
      },
      {
        path: '/dashboard/painel-do-dia', 
        component: PanelDay
      },
      {
        path: '/dashboard/calendario', 
        component: Calendar
      },
      {
        path: '/dashboard/novo-paciente', 
        component: NewPatient
      },
      {
        path: '/dashboard/pesquisar-paciente', 
        component: SearchPatient
      },
      {
        path: '/dashboard/exportar-paciente', 
        component: ExportPatient
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
