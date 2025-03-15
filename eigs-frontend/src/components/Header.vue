<template>
  <header>
    <!-- Logo -->
    <h1 class="logo">EI GAMING STORE</h1>

    <!-- Navigasi -->
    <nav class="nav">
      <input type="text" placeholder="Search..." class="search-box" />
      <router-link to="/products" class="nav-link">Product</router-link>
      <a href="https://contoh-wiki.com" target="_blank" class="nav-link">Wiki</a>
      <router-link to="/about" class="nav-link">About Us</router-link>
      <button @click="toggleSidebar" class="sidebar-btn">☰</button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      alert("Sidebar dibuka! (Fitur ini akan dikembangkan)");
    }
  }
}
</script>

<style scoped>
/* Styling Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222;
  color: white;
}

/* Logo */
.logo {
  font-size: 20px;
  font-weight: bold;
}

/* Navigasi */
.nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Search Box */
.search-box {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Link Navigasi */
.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

/* Button Sidebar */
.sidebar-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>
