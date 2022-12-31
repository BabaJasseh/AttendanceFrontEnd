import { createRouter, createWebHistory } from "vue-router";

import LoginComponent from "../components/auth/LoginComponent.vue";
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
  {
    path: "/",
    component: LoginComponent,
    name: 'login'
  },
  {
    path: "/home",
    component: HomeComponent,
    name : 'home'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
