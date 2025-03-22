import { createRouter, createWebHistory } from 'vue-router';

// Impor views sesuai dengan menu di header
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Help from '../views/Help.vue';
import TermsOfService from '../views/TermsOfService.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home }, // Rute Home
    { 
      path: '/products', 
      component: Products, 
      children: [
        { path: ':id', component: ProductDetail } // Detail produk (rute dinamis)
      ]
    },
    { path: '/help', component: Help }, // Rute Help
    { path: '/terms-of-service', component: TermsOfService }, // Rute ToS
    { path: '/about', component: About }, // Rute About Us
  ],
});

export default router;
