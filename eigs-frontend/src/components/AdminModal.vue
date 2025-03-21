<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Login as Admin</h2>
      <form @submit.prevent="login">
        <label>Login As</label>
        <select v-model="form.role">
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>

        <label>ID / Username</label>
        <input type="text" v-model="form.username" required />

        <label>Password</label>
        <input type="password" v-model="form.password" required />

        <button type="submit">Login</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #218838;
}

.close-btn {
  background: red;
}

.close-btn:hover {
  background: darkred;
}
</style>