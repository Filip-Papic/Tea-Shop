import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import ProductView from "../views/ProductView.vue";
import CategoryView from "../views/CategoryView.vue";
import SearchView from "../views/SearchView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/product/:id/:name",
      name: "product",
      component: ProductView,
    },
    {
      path: "/category/:id/:name",
      name: "category",
      component: CategoryView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft animate__faster",
        leaveClass: "animate__animated animate__fadeOutRight animate__faster",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
      meta: {
        enterClass: "animate__animated animate__fadeInRight animate__faster",
        leaveClass: "animate__animated animate__fadeOutLeft animate__faster",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
