<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <form @submit.prevent="login">
        <label for="role">Login As</label>
        <select v-model="form.role" id="role">
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>

        <label for="username">ID / Username</label>
        <input type="text" v-model="form.username" id="username" placeholder="Enter your username" required />

        <label for="password">Password</label>
        <input type="password" v-model="form.password" id="password" placeholder="Enter your password" required />

        <button type="submit" class="login-btn">Login</button>
      </form>

      <button class="close-btn" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        role: "admin",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      alert(`Logged in as ${this.form.role}!`);
      this.$emit("close");
    },
  },
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
  backdrop-filter: blur(5px); /* Tambahan efek blur */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

label {
  text-align: left;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rgba(31, 41, 55, 1);
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 6px;
  background-color: rgba(243, 244, 246, 1);
  color: rgba(31, 41, 55, 1);
}

input:focus,
select:focus {
  border-color: rgba(139, 92, 246, 1);
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-btn {
  background: rgba(139, 92, 246, 1);
  color: white;
}

.login-btn:hover {
  background: rgba(104, 61, 235, 1);
}

.close-btn {
  background: rgba(239, 68, 68, 1);
  color: white;
  margin-top: 15px;
}

.close-btn:hover {
  background: rgba(220, 38, 38, 1);
}
</style>
