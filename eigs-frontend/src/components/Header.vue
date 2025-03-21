<template>
  <header>
    <div class="container">
      <!-- Logo -->
      <h1 class="logo">EI Gaming Store</h1>

      <!-- Navigasi -->
      <nav class="nav">
        <!-- Search Box -->
        <div class="search-container">
          <div class="search">
            <input placeholder="Search..." class="search__input" type="text" />
            <button class="search__button">
              <svg viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Links -->
        <div class="nav-links">
          <router-link to="/products" class="nav-link">Product</router-link>
          <a href="https://contoh-wiki.com" target="_blank" class="nav-link">Wiki</a>
          <router-link to="/about" class="nav-link">About Us</router-link>

          <!-- Tambahkan komponen ProfileDropdown -->
          <AuthDropdown />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import AuthDropdown from "@/components/AuthDropdown.vue";

export default {
  components: {
    AuthDropdown
  }
};
</script>

<style scoped>
/* Membatasi Lebar Maksimal untuk 1080p */
.container {
  max-width: 1080px;
  width: 95vw;
  min-width: 320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Styling Header */
header {
  background-color: #222;
  color: white;
  padding: 12px 0;
}

/* Logo */
.logo {
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  flex-shrink: 0;
}

/* Navigasi */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

/* Search Box */
.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search {
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 6px;
  padding: 6px 12px;
  width: 100%;
  max-width: 350px;
}

.search__input {
  font-size: 14px;
  border: none;
  background-color: transparent;
  color: white;
  padding: 6px;
  width: 100%;
}

.search__input::placeholder {
  color: #aaa;
}

.search__button {
  border: none;
  background: none;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  padding: 6px;
}

.search__button svg {
  width: 18px;
  height: 18px;
  fill: white;
}

.search input:focus {
  outline: none;
}

/* Link Navigasi */
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s, transform 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: #f39c12;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover {
  color: #f39c12;
  transform: scale(1.05);
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
