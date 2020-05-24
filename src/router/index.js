import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";
import TodoList from "@/views/TodoList.vue";
import Form from "@/views/Form.vue";
import Order from "@/views/order.vue";

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
  },
  {
    path: "/Form",
    name: "Form",
    component: Form
  },
  {
    path: "/Order",
    name: "Order",
    component: Order
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
