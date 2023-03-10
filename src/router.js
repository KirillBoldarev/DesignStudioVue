import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import("@/views/ProductPage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
