<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/Header.vue';
</script>

<template>
  <Header class="main-header" />
  <router-view class="main-content" />
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px; /* Tinggi tetap untuk header */
  z-index: 1000; /* Supaya tetap di atas */
}

.main-content {
  max-width: 1080px; /* Batasi lebar maksimal untuk menjaga konsistensi */
  width: 95vw; /* Lebar fleksibel hingga 95% dari viewport */
  min-width: 320px; /* Hindari elemen terlalu kecil pada layar kecil */
  margin: auto; /* Konten tetap berada di tengah secara horizontal */
  padding-top: 70px; /* Tambahkan jarak agar tidak tertutup header */
  min-height: 100vh; /* Pastikan konten memenuhi tinggi layar */
  box-sizing: border-box; /* Memastikan padding tidak memengaruhi total width */
}
</style>
