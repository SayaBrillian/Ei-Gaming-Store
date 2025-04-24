<template>
  <div class="dashboard-home">
    <h2>Selamat datang di Dashboard User</h2>
    <button @click="$router.push('/products')" class="btn-transaksi">Buat Transaksi Baru</button>

    <section class="table-section">
      <h3>Order Aktif</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Status</th><th>Tanggal Dipesan</th></tr>
        </thead>
        <tbody>
          <tr v-for="order in activeOrders.slice(0, 5)" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.status }}</td>
            <td>{{ formatDate(order.tanggal_dipesan) }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="$router.push('/dashboard/user/orders')">Lihat Semua Order</button>
    </section>

    <section class="table-section">
      <h3>Riwayat Transaksi</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Status</th><th>Tanggal Selesai / Dibatalkan</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in riwayat.slice(0, 5)" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.tanggal_selesai || item.tanggal_dibatalkan }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="$router.push('/dashboard/user/history')">Lihat Semua Riwayat</button>
    </section>
  </div>
</template>

<script>
import orders from '@/assets/tempodb/order_active.json';
import riwayat from '@/assets/tempodb/order_history.json';

export default {
  data() {
    const userId = JSON.parse(localStorage.getItem('user'))?.id || 1;
    return {
      activeOrders: orders.filter(o => o.user_id === userId),
      riwayat: riwayat.filter(r => r.user_id === userId)
    };
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleString('id-ID');
    }
  }
};
</script>

<style scoped>
.dashboard-home {
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.btn-transaksi {
  background-color: #3b82f6;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 2rem;
}

.btn-transaksi:hover {
  background-color: #2563eb;
}

.table-section {
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.table-section h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #374151;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th {
  background-color: #f3f4f6;
  color: #111827;
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}

tbody tr:hover {
  background-color: #f9fafb;
}

button {
  background-color: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #059669;
}

</style>
