<template>
  <div class="dashboard-home">
    <h2>Daftar Order Admin</h2>
    <div class="table-section">
      <h3>Order Aktif</h3>
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
          <tr v-for="order in activeOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ getProduct(order.product_id).name }}</td>
            <td>{{ formatPrice(order.final_price) }}</td>
            <td>{{ order.status }}</td>
            <td><button @click="selectOrder(order)">Detail</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <OrderDetailModal
      :visible="showModal"
      :order="selectedOrder"
      :user="selectedUser"
      :product="selectedProduct"
      @close="showModal = false"
      @ok="handleOrderCompleted"
      @cancelOrder="handleCancelOrder"
    />
  </div>
</template>

<script>
import ordersData from '@/assets/tempodb/order_active.json'; // Lokasi JSON yang sesuai
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
      selectedUser: null,
      selectedProduct: null,
      showModal: false,
    };
  },
  computed: {
    activeOrders() {
      return this.orders.filter(order => order.status !== 'finished' && order.status !== 'canceled_user' && order.status !== 'canceled_admin' && order.status !== 'canceled_system');
    },
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
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
    handleOrderCompleted() {
      // Handle when admin confirms the order
      console.log('Order Completed');
      this.showModal = false;
    },
    handleCancelOrder() {
      // Handle order cancellation
      console.log('Order Cancelled');
      this.showModal = false;
    },
  },
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
  margin-top: 12px;
  padding: 10px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #2563eb;
}

router-link {
  display: inline-block;
}
</style>
