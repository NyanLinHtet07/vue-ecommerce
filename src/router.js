import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/main/Home.vue";
import Product from "@/views/main/Product.vue";
import productDetail from "@/views/main/ProductDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path:"/product/:id",
    name: "product-detail",
    component: productDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;