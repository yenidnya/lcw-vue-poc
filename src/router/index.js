import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "anasayfa",
    component: Homepage,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
