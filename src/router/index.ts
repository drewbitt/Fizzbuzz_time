import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm.js';
import Home from "./pages/Home.vue";
import Timer from "./pages/Timer.vue";

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/timer',
        component: Timer
      }
    ]
  })

export default router;