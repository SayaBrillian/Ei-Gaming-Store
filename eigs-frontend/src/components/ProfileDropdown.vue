<template>
  <div class="profile-container" @click="toggleDropdown">
    <div class="avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>
    <div v-if="isDropdownVisible" class="dropdown-menu">
      <div class="profile-header">
        <div class="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
        <div class="profile-info">
          <p class="username">John Doe</p>
          <p class="email">johndoe@example.com</p>
        </div>
      </div>
      <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
      <button @click="logout" class="dropdown-item logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    logout() {
      alert("Logout berhasil! (Fungsi ini akan dikembangkan)");
    },
  },
};
</script>

<style scoped>
.profile-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.avatar svg {
  display: block;
  border-radius: 50%;
  background-color: #444;
  padding: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: #333;
  color: white;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
}

.profile-icon svg {
  display: block;
}

.dropdown-item {
  background: none;
  border: none;
  color: white;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;
}

.dropdown-item:hover {
  background: #444;
}

.logout {
  color: #e74c3c;
}
</style>
