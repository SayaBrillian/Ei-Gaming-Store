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
          <button @click="toggleSidebar" class="sidebar-btn">☰</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      alert("Sidebar dibuka! (Fitur ini akan dikembangkan)");
    }
  }
};
</script>

<style scoped>
/* Membatasi Lebar Maksimal untuk 1080p */
.container {
  max-width: 1080px; /* Menyesuaikan dengan layar 1080p */
  width: 95vw; /* Agar tetap fleksibel */
  min-width: 320px; /* Agar tidak berantakan di layar kecil */
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
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  flex-shrink: 0;
}

/* Navigasi */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

/* Search Box - Dipusatkan */
.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search {
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
  padding: 5px 10px;
  width: 100%;
  max-width: 350px;
}

.search__input {
  font-family: inherit;
  font-size: 14px;
  border: none;
  background-color: transparent;
  color: white;
  padding: 5px;
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
  padding: 5px;
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
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f39c12;
}

/* Button Sidebar */
.sidebar-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}
</style>
