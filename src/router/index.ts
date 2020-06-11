import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm.js';
import FizzBuzzOptions from '../components/FizzBuzzOptions.vue';
import TimerItem from '../components/TimerItem.vue';

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: FizzBuzzOptions
      },
      {
        path: '/timer',
        component: TimerItem
      }
    ]
  })

export default router;