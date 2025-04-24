<template>
  <div class="dashboard-jobs">
    <h2>Daftar Pekerjaan Admin</h2>

    <!-- Tabel Order Belum Diambil -->
    <div class="table-section">
      <h3>Order Belum Diambil</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produk</th>
            <th>Harga</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in paidOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ getProduct(order.product_id).name }}</td>
            <td>{{ formatPrice(order.final_price) }}</td>
            <td>{{ order.status }}</td>
            <td>
              <button @click="selectOrder(order)">Detail</button>
            </td>
          </tr>
          <tr v-if="paidOrders.length === 0">
            <td colspan="5" style="text-align:center;">Tidak ada order belum diambil.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Tabel Order Sedang Diproses -->
    <div class="table-section">
      <h3>Order Sedang Diproses</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produk</th>
            <th>Harga</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="order in processingOrders" :key="order.id">
            <tr>
              <td>{{ order.id }}</td>
              <td>{{ getProduct(order.product_id).name }}</td>
              <td>{{ formatPrice(order.final_price) }}</td>
              <td>{{ order.status }}</td>
              <td>
                <button @click="toggleDropdown(order.id)">Detail</button>
                <button :disabled="true">Selesai</button>
              </td>
            </tr>
            <tr v-if="expandedOrder === order.id" class="dropdown-row">
              <td colspan="5">
                <div class="dropdown-content">
                  <p><strong>Email:</strong> {{ order.form_data.email }}</p>
                  <p><strong>Phone:</strong> {{ order.form_data.phone }}</p>
                  <p><strong>UID:</strong> {{ order.form_data.uid }}</p>
                  <p><strong>Server:</strong> {{ order.form_data.server }}</p>
                </div>
              </td>
            </tr>
          </template>
          <tr v-if="processingOrders.length === 0">
            <td colspan="5" style="text-align:center;">Tidak ada order yang sedang diproses.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Detail Order -->
    <OrderDetailModal
      :visible="showModal"
      :order="selectedOrder"
      :user="selectedUser"
      :product="selectedProduct"
      @close="showModal = false"
      @ok="showModal = false"
    />
  </div>
</template>

<script>
import ordersData from '@/assets/tempodb/order_active.json';
import productsData from '@/assets/tempodb/products.json';
import usersData from '@/assets/tempodb/users.json';
import OrderDetailModal from '@/components/OrderDetailModal.vue';

export default {
  components: { OrderDetailModal },
  data() {
    return {
      orders: ordersData,
      products: productsData,
      users: usersData,
      selectedOrder: null,
      selectedProduct: null,
      selectedUser: null,
      showModal: false,
      expandedOrder: null,
    };
  },
  computed: {
    paidOrders() {
      return this.orders.filter(order => order.status === 'paid');
    },
    processingOrders() {
      return this.orders.filter(order => ['pending', 'processing'].includes(order.status));
    },
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value);
    },
    getProduct(id) {
      return this.products.find(p => p.id === id) || {};
    },
    getUser(id) {
      return this.users.find(u => u.id === id) || {};
    },
    selectOrder(order) {
      this.selectedOrder = order;
      this.selectedProduct = this.getProduct(order.product_id);
      this.selectedUser = this.getUser(order.user_id);
      this.showModal = true;
    },
    toggleDropdown(orderId) {
      this.expandedOrder = this.expandedOrder === orderId ? null : orderId;
    },
  },
};
</script>

<style scoped>
.dashboard-jobs {
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
}

.table-section {
  margin-bottom: 40px;
}

.table-section h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: #f4f4f4;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
}

tbody tr:hover {
  background-color: #fafafa;
}

button {
  margin: 4px;
  padding: 8px 12px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2563eb;
}

button:disabled {
  background-color: #a5b4fc;
  cursor: not-allowed;
}

.dropdown-row {
  background-color: #f0f9ff;
}

.dropdown-content {
  padding: 10px;
  font-size: 14px;
  color: #111827;
}
</style>
