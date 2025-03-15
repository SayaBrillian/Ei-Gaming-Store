<template>
  <div>
    <h2>Ini adalah halaman Product</h2>
    <ul>
      <li><router-link to="/products/1">Product 1</router-link></li>
      <li><router-link to="/products/2">Product 2</router-link></li>
      <li><router-link to="/products/3">Product 3</router-link></li>
    </ul>

    <!-- Child Route akan ditampilkan di sini -->
    <router-view />
  </div>
</template>
