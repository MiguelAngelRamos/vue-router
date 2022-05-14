import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "UsersView"*/ '@/views/UsersView.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "UserViewById"*/ '@/views/UserView.vue')
  },
  {
    path: '/ciclo',
    name: 'ciclo-vida',
    component: () => import(/* webpackChunkName: "UserViewById"*/ '@/views/CicloDeVida.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    // path: '/:catchAll(.*)'
    component: () => import(/* webpackChunkName: "UserViewById"*/ '@/views/Error404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes
})

export default router;