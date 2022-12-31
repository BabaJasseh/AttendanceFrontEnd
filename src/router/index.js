import { createRouter, createWebHistory } from "vue-router";

import LoginComponent from "../components/auth/LoginComponent.vue";
import HomeComponent from '../components/HomeComponent.vue';
import StoreEmployee from '../components/employee/CreateEmployeeComponent.vue'

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
  {
    path: "/store-employee",
    component: StoreEmployee,
    name : 'store-employee'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
