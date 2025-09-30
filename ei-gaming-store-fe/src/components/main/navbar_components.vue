<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar__logo">
      <img src="/logo.png" alt="EI Gaming Store" />
      <span class="navbar__brand">EI Gaming Store</span>
    </div>

    <!-- Search -->
    <div class="navbar__search">
      <input type="text" placeholder="Search games..." />
    </div>

    <!-- Menu -->
    <div class="navbar__menu">
      <a href="/" class="nav-link active">Home</a>
      <a href="/product" class="nav-link">Product</a>
      <a href="/profile" class="nav-link">
        <!-- Kondisi login -->
        <!-- Belum login -->
        Login
        <!-- Sudah login -->
        <!-- {{ user.fullName }} -->
      </a>
    </div>
  </nav>
</template>
