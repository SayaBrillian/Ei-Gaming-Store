<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="modal-content">
        <div class="modal-box login-box">
          <h2 class="centered-title">Login</h2>
          <form @submit.prevent="handleLogin">
            <input type="text" v-model="loginData.username" placeholder="Username/Email/UID" required />
            <input type="password" v-model="loginData.password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div class="modal-box register-box">
          <h2 class="centered-title">Register</h2>
          <form @submit.prevent="handleRegister">
            <input type="text" v-model="registerData.name" placeholder="Full Name" required />
            <input type="text" v-model="registerData.username" placeholder="Username" required />
            <input type="email" v-model="registerData.email" placeholder="Email" required />
            <input type="password" v-model="registerData.password" placeholder="Password" required />
            <input type="password" v-model="registerData.confirmPassword" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <button class="close-button" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
import usersData from '@/assets/tempodb/users.json';

export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      registerData: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      users: [] // dari JSON
    };
  },
  mounted() {
    // Ambil data users dari import
    this.users = usersData;

    // Cek apakah ada data tambahan dari localStorage (simulasi register yang tersimpan)
    const storedUsers = JSON.parse(localStorage.getItem('temp_users'));
    if (storedUsers && Array.isArray(storedUsers)) {
      this.users = [...this.users, ...storedUsers];
    }
  },
  methods: {
    handleLogin() {
      const input = this.loginData;

      const user = this.users.find(u =>
        (u.username === input.username ||
          u.email === input.username ||
          u.uid === input.username) &&
        u.password === input.password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert(`Login berhasil! Selamat datang, ${user.name}`);

        // Reload halaman setelah login berhasil
        location.reload();  // Ini akan memuat ulang halaman

        this.$emit('close');
      } else {
        alert("Username/email/UID atau password salah.");
      }
    },

    handleRegister() {
      const input = this.registerData;

      // Validasi password
      if (input.password !== input.confirmPassword) {
        alert("Password tidak cocok!");
        return;
      }

      // Cek duplicate username/email
      const isDuplicate = this.users.some(u =>
        u.username === input.username || u.email === input.email
      );

      if (isDuplicate) {
        alert("Username atau email sudah digunakan.");
        return;
      }

      // Generate UID 8 digit
      const nextId = this.users.length + 1;
      const uid = String(nextId).padStart(8, '0');

      const newUser = {
        id: nextId,
        uid: uid,
        name: input.name,
        username: input.username,
        email: input.email,
        password: input.password
      };

      // Simpan user baru ke localStorage sementara (karena tidak bisa ubah file asli)
      let newUsers = JSON.parse(localStorage.getItem('temp_users')) || [];
      newUsers.push(newUser);
      localStorage.setItem('temp_users', JSON.stringify(newUsers));
      localStorage.setItem('user', JSON.stringify(newUser));

      alert(`Register berhasil! UID kamu: ${uid}`);
      this.users.push(newUser); // untuk session saat ini
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 650px;
  color: rgba(31, 41, 55, 1);
}

.modal-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.modal-box {
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-box {
  border-right: 2px solid rgba(167, 139, 250, 0.3);
}

input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid rgba(167, 139, 250, 0.5);
  border-radius: 4px;
  background-color: white;
  color: rgba(31, 41, 55, 1);
}

input:focus {
  border-color: rgba(167, 139, 250, 1);
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background: rgba(167, 139, 250, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

button:hover {
  background: rgba(139, 92, 246, 1);
}

.close-button {
  width: 100%;
  padding: 10px;
  background: rgba(239, 68, 68, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

.close-button:hover {
  background: rgba(220, 38, 38, 1);
}

/* Style baru: Buat tulisan Login dan Register di tengah dan tebal */
.centered-title {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}
</style>
