<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER / NAVBAR -->
    <q-header elevated>
      <q-toolbar>

        <!-- Logo -->
        <q-toolbar-title class="row items-center">
          <span class="text-primary text-weight-bold">EI Gaming Store</span>
        </q-toolbar-title>

        <!-- Search -->
        <q-input
          standout
          dense
          v-model="search"
          placeholder="Search..."
          class="q-mr-md"
          debounce="300"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- Menu -->
        <q-btn flat label="Home" :to="{ path: '/' }" />
        <q-btn flat label="Product" :to="{ path: '/product' }" />
        <q-btn flat :label="isLoggedIn ? username : 'Login'" :to="{ path: '/profile' }" />
      </q-toolbar>
    </q-header>

    <!-- HALAMAN AKTIF -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const isLoggedIn = ref(false)       // sementara dummy login status
const username = ref('Raiden Shogun') // dummy user name
</script>

<style scoped>
/* contoh kecil styling tambahan */
.q-toolbar {
  background-color: white;
}
</style>
