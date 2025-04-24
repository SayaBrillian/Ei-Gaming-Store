<template>
  <div class="dashboard-home">
    <h2>Selamat Datang, Admin</h2>

    <!-- Daftar Pekerjaan Admin -->
    <div class="table-section">
      <h3>Daftar Pekerjaan Saat Ini</h3>
      <table>
        <thead>
          <tr>
            <th>ID Order</th>
            <th>Status</th>
            <th>Waktu Mulai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in activeJobs" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.status }}</td>
            <td>{{ formatDate(getStartTime(order)) }}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/dashboard/admin/jobs">
        <button>Lihat Semua Pekerjaan</button>
      </router-link>
    </div>

    <!-- Order Aktif -->
    <div class="table-section">
      <h3>Order Aktif Terbaru</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Produk</th>
            <th>Status</th>
            <th>Tanggal Dipesan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in latestOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.user_id }}</td>
            <td>{{ order.product_id }}</td>
            <td>{{ order.status }}</td>
            <td>{{ formatDate(order.tanggal_dipesan) }}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/dashboard/admin/orders">
        <button>Lihat Semua Order</button>
      </router-link>
    </div>

    <!-- Riwayat Transaksi -->
    <div class="table-section">
      <h3>Riwayat Transaksi Terbaru</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Produk</th>
            <th>Status</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in latestHistory" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.user_id }}</td>
            <td>{{ item.product_id }}</td>
            <td>{{ item.status }}</td>
            <td>{{ getFinalDate(item) }}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/dashboard/admin/history">
        <button>Lihat Semua Riwayat</button>
      </router-link>
    </div>

    <!-- Shortcut ke Produk -->
    <div class="shortcut-card">
      <h3>Shortcut</h3>
      <router-link to="/dashboard/admin/products" class="nav-link shortcut">Kelola Produk</router-link>
    </div>
  </div>
</template>

<script>
import ordersData from '@/assets/tempodb/order_active.json';
import historyData from '@/assets/tempodb/order_history.json';

export default {
  data() {
    return {
      allOrders: ordersData,
      allHistory: historyData,
    };
  },
  computed: {
    latestOrders() {
      return this.allOrders
        .sort((a, b) => new Date(b.tanggal_dipesan) - new Date(a.tanggal_dipesan))
        .slice(0, 5);
    },
    latestHistory() {
      return this.allHistory
        .sort((a, b) => {
          const dateA = new Date(a.tanggal_selesai || a.tanggal_dibatalkan || a.tanggal_dibayar || a.tanggal_dipesan);
          const dateB = new Date(b.tanggal_selesai || b.tanggal_dibatalkan || b.tanggal_dibayar || b.tanggal_dipesan);
          return dateB - dateA;
        })
        .slice(0, 5);
    },
    activeJobs() {
      // Misalnya, mengambil data pekerjaan aktif dari admin log
      const adminId = JSON.parse(localStorage.getItem("admin"))?.id;
      return this.allOrders.filter(order => 
        order.admin_log.some(log => log.admin_id === adminId && log.status === "in_progress")
      );
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("id-ID");
    },
    getFinalDate(item) {
      return this.formatDate(
        item.tanggal_selesai || item.tanggal_dibatalkan || item.tanggal_dibayar || item.tanggal_dipesan
      );
    },
    getStartTime(order) {
      const log = order.admin_log.find(log => log.status === "in_progress");
      return log ? log.waktu_mulai : "-";
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

th, td {
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
