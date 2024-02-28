import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddToDoView from "@/views/AddTodoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-todo",
      name: "add-todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddToDoView,
    },
  ],
});

export default router;
