import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCity from "../components/AddCity";
import EditCity from "../views/EditCity";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add-city",
    name: "addcity",
    component: AddCity,
  },
  {
    path: "/cities/:cityId",
    name: "editcity",
    component: EditCity,
  },
  {
    path: "/aboutView",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;