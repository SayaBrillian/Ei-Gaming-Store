import MainLayout from 'layouts/MainLayout.vue'
import DashboardLayout from 'layouts/DashboardLayout.vue'

import HomePage from 'pages/HomePage.vue'
import ProductPage from 'pages/ProductPage.vue'
import ProfilePage from 'pages/ProfilePage.vue'

import DashboardHome from 'pages/dashboard/DashboardHome.vue'
import DashboardUsers from 'pages/dashboard/DashboardUsers.vue'
import DashboardSettings from 'pages/dashboard/DashboardSettings.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },          // /
      { path: 'product', component: ProductPage },// /product
      { path: 'profile', component: ProfilePage } // /profile
    ]
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      { path: '', component: DashboardHome },     // /dashboard
      { path: 'users', component: DashboardUsers }, // /dashboard/users
      { path: 'settings', component: DashboardSettings } // /dashboard/settings
    ]
  }
]

export default routes
