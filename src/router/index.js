import Vue from "vue";
import VueRouter from "vue-router";
import Books from "../pages/Books.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Books",
    component: Books,
  },
  {
    path: "/addbook",
    name: "AddBook",
    component: () => import("../pages/AddBooks.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
