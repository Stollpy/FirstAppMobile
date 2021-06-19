import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue';
import MemoriesPage from "../views/MemoriesPage";

const routes  = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/memories',
    name: 'MemoriesPage',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    name: 'MemoryDetailsPage',
    component: () => import('../views/MemoryDetailsPage')
  },
  {
    path: '/memories/add',
    name: 'AddMemoryPage',
    component: () => import('../views/AddMemoryPage')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
