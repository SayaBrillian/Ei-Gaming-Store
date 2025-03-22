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
    { path: '/', name: 'Home', component: Home }, // Rute Home
    { path: '/products', name: 'Products', component: Products }, // Rute daftar produk
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetail }, // Rute detail produk dinamis
    { path: '/help', name: 'Help', component: Help }, // Rute Help
    { path: '/terms-of-service', name: 'TermsOfService', component: TermsOfService }, // Rute ToS
    { path: '/about', name: 'About', component: About }, // Rute About Us
  ],
});

export default router;
