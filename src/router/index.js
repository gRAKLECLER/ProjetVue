import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";
import TodoList from "@/views/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/Pokemon",
    name: "Pokemon",
    component: Pokemon
  },

  {
    path: "/TodoList",
    name: "TodoList",
    component: TodoList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
