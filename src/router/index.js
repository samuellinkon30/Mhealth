import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

//Agenda
import Calendar from "@/views/schedule/Calendar.vue";
import Schedule from "@/views/schedule/Schedule.vue";
import WaitingList from "@/views/schedule/WaitingList.vue";
import PanelDay from "@/views/schedule/PanelDay.vue";

//Pacientes
import NewPatient from "@/views/patient/NewPatient.vue";
import SearchPatient from "@/views/patient/SearchPatient.vue";
import ExportPatient from "@/views/patient/ExportPatient.vue";
import ViewPatient from "@/views/patient/ViewPatiente.vue"

//Utils
import Login from "../views/Login.vue";
import Dashboard from "@/views/utils/Dashboard.vue";
import Panel from "@/views/Panel.vue";

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
    // meta: { requiresAuth: true },
    children: [
      { path: '/dashboard/home', component: Panel },
      { path: '/dashboard/novo-agendamento', component: Schedule },
      { path: '/dashboard/lista-de-espera', component: WaitingList },
      { path: '/dashboard/painel-do-dia', component: PanelDay },
      { path: '/dashboard/calendario', component: Calendar },
      { path: '/dashboard/novo-paciente', component: NewPatient },
      { path: '/dashboard/paciente/:slug', component: ViewPatient },
      { path: '/dashboard/pesquisar-paciente', component: SearchPatient },
      { path: '/dashboard/exportar-paciente', component: ExportPatient },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
