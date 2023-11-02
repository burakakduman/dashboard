import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";
import ToDoPage from "../pages/ToDoPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/todopage",
    name: "ToDoPage",
    component: ToDoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
