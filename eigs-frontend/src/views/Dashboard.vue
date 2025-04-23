<template>
    <div class="dashboard-container">
      <DashSidebar />
      <div class="dashboard-content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import DashSidebar from '@/components/DashSidebar.vue'
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    min-height: 100vh;
  }
  
  .dashboard-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
  </style>
  