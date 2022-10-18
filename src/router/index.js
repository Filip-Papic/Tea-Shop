import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import BlogView from "../views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
  ],
});

export default router;
