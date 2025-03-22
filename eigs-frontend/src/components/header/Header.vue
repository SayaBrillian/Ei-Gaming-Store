<template>
  <header>
    <div class="container">
      <!-- Logo dengan Navigasi ke Home -->
      <router-link to="/" class="logo">EI Gaming Store</router-link>

      <!-- Navigasi -->
      <nav class="nav">
        <div class="nav-links">
          <router-link to="/products" class="nav-link">Produk</router-link>
          <router-link to="/help" class="nav-link">Help</router-link>
          <router-link to="/terms-of-service" class="nav-link">ToS</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>

          <!-- Tetap Menyertakan Dropdown Profile -->
          <AuthDropdown />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import AuthDropdown from "@/components/header/AuthDropdown.vue";

export default {
  components: {
    AuthDropdown
  }
};
</script>

<style scoped>
/* Container Header */
.container {
  max-width: 1080px;
  width: 95vw;
  min-width: 320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header {
  background-color: white; /* Warna latar putih */
  color: rgba(167, 139, 250, 1); /* Warna ungu untuk teks default */
  padding: 12px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Tambahkan shadow ringan */
}

/* Logo tetap di kiri */
.logo {
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  flex-shrink: 0;
  text-decoration: none;
  color: rgba(167, 139, 250, 1); /* Warna teks ungu */
}

/* Atur Nav */
.nav {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end; /* Float semua link ke kanan */
  align-items: center;
}

/* Link Navigasi */
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: rgba(85, 85, 85, 1); /* Warna teks utama abu */
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s, transform 0.2s;
  position: relative;
}

.nav-link:hover {
  color: rgba(167, 139, 250, 1); /* Ungu saat hover */
  transform: scale(1.05); /* Efek zoom */
}

/* Efek Underline dengan Ungu */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: rgba(167, 139, 250, 1); /* Warna ungu underline */
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1); /* Underline muncul saat hover */
}
</style>
