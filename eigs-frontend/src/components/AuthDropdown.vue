<template>
  <div class="auth-container" @click="toggleDropdown">
    <div class="avatar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="white">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>
    <div v-if="isDropdownVisible" class="dropdown-menu">
      <template v-if="!isLoggedIn">
        <button @click="openUserModal" class="dropdown-item">Login as User</button>
        <button @click="openAdminModal" class="dropdown-item">Login as Admin</button>
      </template>
      <template v-else>
        <div class="profile-card">
          <div class="profile-info">
            <img :src="userProfile.picture" alt="Profile Picture" class="profile-pic" />
            <div>
              <p class="profile-name">{{ userProfile.name }}</p>
              <p class="profile-email">{{ userProfile.email }}</p>
              <p class="profile-status" :class="{ 'admin': userProfile.isAdmin }">
                {{ userProfile.isAdmin ? 'Admin' : 'User' }}
              </p>
            </div>
          </div>
          <router-link to="/dashboard" class="dropdown-item dashboard-link">Dashboard</router-link>
          <button @click="logout" class="dropdown-item logout">Logout</button>
        </div>
      </template>
    </div>
    <UserModal v-if="showUserModal" @close="showUserModal = false" />
    <AdminModal v-if="showAdminModal" @close="showAdminModal = false" />
  </div>
</template>

<script>
import UserModal from "./UserModal.vue";
import AdminModal from "./AdminModal.vue";

export default {
  components: {
    UserModal,
    AdminModal,
  },
  data() {
    return {
      isDropdownVisible: false,
      isLoggedIn: false, // Simpan status login user
      showUserModal: false,
      showAdminModal: false,
      userProfile: {
        name: "John Doe",
        email: "johndoe@example.com",
        picture: "https://via.placeholder.com/40", // Ganti dengan gambar profil asli jika ada
        isAdmin: false, // Status user (false = User, true = Admin)
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    logout() {
      this.isLoggedIn = false; // Simulasikan logout
      alert("Anda telah logout");
    },
    openUserModal() {
      this.showUserModal = true;
    },
    openAdminModal() {
      this.showAdminModal = true;
    },
  },
};
</script>

<style scoped>
.auth-container {
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
  background: #222;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown-item {
  background: none;
  border: none;
  color: white;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-size: 14px;
  text-decoration: none;
  border-radius: 6px;
}

.dropdown-item:hover {
  background: #444;
  transform: scale(1.05);
}

.dashboard-link {
  font-weight: bold;
  color: white;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
  width: 100%;
  transition: background 0.3s, transform 0.2s;
}

.dashboard-link:hover {
  background: #444;
  transform: scale(1.05);
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
}

.profile-name {
  font-size: 16px;
  font-weight: bold;
}

.profile-email {
  font-size: 13px;
  color: #bbb;
}

.profile-status {
  font-size: 12px;
  font-weight: bold;
  color: #00ff00;
}

.profile-status.admin {
  color: #ffcc00;
}

.logout {
  background: red;
  color: white;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
  width: 100%;
  transition: background 0.3s, transform 0.2s;
}

.logout:hover {
  background: darkred;
  transform: scale(1.05);
}
.modals-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
</style>