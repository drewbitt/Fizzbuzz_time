import {
  createRouter,
  createWebHistory,
} from "vue-router/dist/vue-router.esm.js";
import Home from "./pages/Home.vue";
import Timer from "./pages/Timer.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      props: (route: any) => ({ hasTime: (route.query.booleanParam === 'true') })
    },
    {
      name: "timer",
      path: "/timer",
      component: Timer,
      props: true,
    },
  ],
});

export default router;
