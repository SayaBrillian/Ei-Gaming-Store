<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="mini-profile">
          <img :src="profile.picture" class="profile-pic" />
          <div>
            <p class="profile-name">{{ profile.name }}</p>
            <p class="profile-role">{{ isAdmin ? 'Admin' : 'User' }}</p>
          </div>
        </div>
      </div>
  
      <nav class="sidebar-menu">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          class="menu-item"
          active-class="active"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: '',
          picture: 'https://via.placeholder.com/40',
        },
        isAdmin: false,
      };
    },
    computed: {
      menu() {
        if (this.isAdmin) {
            return [
        { name: 'Home', path: '/dashboard/admin/home' },
        { name: 'Jobs', path: '/dashboard/admin/jobs' },
        { name: 'Orders', path: '/dashboard/admin/orders' },
        { name: 'Products', path: '/dashboard/admin/products' },
        { name: 'History', path: '/dashboard/admin/history' },
      ]
    } else {
      return [
        { name: 'Home', path: '/dashboard/user/home' },
        { name: 'Orders', path: '/dashboard/user/orders' },
        { name: 'History', path: '/dashboard/user/history' },
      ]
    }
      },
    },
    mounted() {
      const user = JSON.parse(localStorage.getItem('user'));
      const admin = JSON.parse(localStorage.getItem('admin'));
  
      if (admin) {
        this.isAdmin = true;
        this.profile.name = admin.name || 'Admin';
      } else if (user) {
        this.isAdmin = false;
        this.profile.name = user.name || 'User';
        this.profile.picture = user.picture || this.profile.picture;
      }
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  border-right: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

  .sidebar-header {
    margin-bottom: 20px;
  }
  
  .mini-profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #a78bfa;
  }
  
  .profile-name {
    font-weight: bold;
    font-size: 16px;
  }
  
  .profile-role {
    font-size: 13px;
    color: #666;
  }
  
  .sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .menu-item {
    padding: 10px;
    color: #333;
    text-decoration: none;
    border-radius: 6px;
    transition: 0.3s;
  }
  
  .menu-item:hover {
    background: #eaeaea;
  }
  
  .menu-item.active {
    background: #dcd6f7;
    color: #7c3aed;
    font-weight: bold;
  }
  </style>
  