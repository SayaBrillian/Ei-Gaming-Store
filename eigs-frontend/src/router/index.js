import { createRouter, createWebHistory } from 'vue-router'

// Public pages
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Help from '../views/Help.vue'
import TermsOfService from '../views/TermsOfService.vue'
import About from '../views/About.vue'

// Dashboard layout
import Dashboard from '../views/Dashboard.vue'

// Dashboard - User views
import UserHome from '../views/dashuser/UserHome.vue'
import UserOrders from '../views/dashuser/UserOrders.vue'
import UserHistory from '../views/dashuser/UserHistory.vue'

// Dashboard - Admin views
import AdminHome from '../views/dashadmin/AdminHome.vue'
import AdminOrders from '../views/dashadmin/AdminOrders.vue'
import AdminJobs from '../views/dashadmin/AdminJobs.vue'
import AdminProducts from '../views/dashadmin/AdminProducts.vue'
import AdminHistory from '../views/dashadmin/AdminHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public Routes
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetail },
    { path: '/help', name: 'Help', component: Help },
    { path: '/terms-of-service', name: 'TermsOfService', component: TermsOfService },
    { path: '/about', name: 'About', component: About },

    // Dashboard Routes (Parent Layout + Nested Routes)
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        // User routes
        { path: 'user/home', component: UserHome },
        { path: 'user/orders', component: UserOrders },
        { path: 'user/history', component: UserHistory },

        // Admin routes
        { path: 'admin/home', component: AdminHome },
        { path: 'admin/orders', component: AdminOrders },
        { path: 'admin/jobs', component: AdminJobs },
        { path: 'admin/products', component: AdminProducts },
        { path: 'admin/history', component: AdminHistory },
      ]
    }
  ]
})

export default router
