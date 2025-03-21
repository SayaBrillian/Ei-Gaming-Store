<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Hi User</h2>
      </div>
      <div class="modal-content">
        <div class="modal-box login-box">
          <h2>Login</h2>
          <form @submit.prevent="handleLogin">
            <input type="text" v-model="loginData.username" placeholder="Username or Email" required />
            <input type="password" v-model="loginData.password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div class="modal-box register-box">
          <h2>Register</h2>
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
      }
    };
  },
  methods: {
    handleLogin() {
      console.log("Logging in:", this.loginData);
    },
    handleRegister() {
      console.log("Registering:", this.registerData);
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
  background: rgba(17, 24, 39, 1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 650px;
  color: rgba(243, 244, 246, 1);
}

.modal-header {
  font-size: 20px;
  font-weight: bold;
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
  background: rgba(31, 41, 55, 1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.login-box {
  border-right: 2px solid rgba(55, 65, 81, 1);
}

input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid rgba(55, 65, 81, 1);
  border-radius: 4px;
  background-color: rgba(17, 24, 39, 1);
  color: rgba(243, 244, 246, 1);
}

input:focus {
  border-color: rgba(167, 139, 250, 1);
}

button {
  width: 100%;
  padding: 10px;
  background: rgba(167, 139, 250, 1);
  color: rgba(17, 24, 39, 1);
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
  color: rgba(243, 244, 246, 1);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: bold;
}

.close-button:hover {
  background: rgba(220, 38, 38, 1);
}
</style>
