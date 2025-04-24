<template>
  <div class="user-orders">
    <h2>Daftar Order Aktif</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produk</th>
          <th>Status</th>
          <th>Tanggal Dipesan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in userOrders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.product_id }}</td>
          <td>{{ order.status }}</td>
          <td>{{ formatDate(order.tanggal_dipesan) }}</td>
          <td>
            <button @click="openModal(order)">Detail</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="selectedOrder" class="modal-overlay">
      <div class="modal">
        <h3>Detail Order #{{ selectedOrder.id }}</h3>
        <p><strong>Produk:</strong> {{ selectedOrder.product_id }}</p>
        <p><strong>Status:</strong> {{ selectedOrder.status }}</p>
        <p><strong>Tanggal Dipesan:</strong> {{ formatDate(selectedOrder.tanggal_dipesan) }}</p>
        <p v-if="selectedOrder.tanggal_dibayar"><strong>Tanggal Dibayar:</strong> {{ formatDate(selectedOrder.tanggal_dibayar) }}</p>

        <div class="modal-actions">
          <button @click="selectedOrder = null">Tutup</button>
          <button @click="confirmOrder(selectedOrder.id)">OK</button>
          <button @click="cancelOrder(selectedOrder.id)">Batalkan Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ordersData from '@/assets/tempodb/order_active.json';

export default {
  data() {
    return {
      orders: ordersData,
      selectedOrder: null,
    };
  },
  computed: {
    userOrders() {
      const userId = 1; // ganti dengan ID user yang login
      return this.orders.filter(order => order.user_id === userId);
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString('id-ID');
    },
    openModal(order) {
      this.selectedOrder = order;
    },
    confirmOrder(id) {
      alert(`Order #${id} dikonfirmasi.`);
      this.selectedOrder = null;
    },
    cancelOrder(id) {
      alert(`Order #${id} dibatalkan.`);
      this.selectedOrder = null;
    },
  },
};
</script>

<style scoped>
.user-orders {
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

th {
  background-color: #f3f4f6;
  color: #111827;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid #e5e7eb;
  font-weight: 600;
}

td {
  padding: 0.75rem 1rem;
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
  margin-right: 0.5rem;
}

button:hover {
  background-color: #059669;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 41, 55, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  font-family: inherit;
}

.modal h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.modal p {
  margin-bottom: 0.75rem;
  color: #374151;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
</style>
