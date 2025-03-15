import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Products from '../views/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about', component: About },
    { 
      path: '/products', 
      component: Products,
      children: [
        { path: ':id', component: ProductDetail } // Dynamic route untuk detail produk
      ]
    },
  ],
})

export default router
