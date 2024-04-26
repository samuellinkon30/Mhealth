import { createRouter, createWebHistory } from "vue-router";

//Agenda
import Calendar from "@/views/Calendar.vue";
import Schedule from "@/views/Schedule.vue";
import WaitingList from "@/views/WaitingList.vue";
import PanelDay from "@/views/PanelDay.vue"


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
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
