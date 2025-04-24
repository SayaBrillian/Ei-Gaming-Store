<template>
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Detail Pesanan</h3>
        <p><strong>ID Order:</strong> {{ order.id }}</p>
        <p><strong>Tanggal Dipesan:</strong> {{ order.tanggal_dipesan }}</p>
        <p><strong>Tanggal Dibayar:</strong> {{ order.tanggal_dibayar || 'Belum Dibayar' }}</p>
        <p><strong>Status:</strong> {{ order.status }}</p>
  
        <h4>Data Pemesan</h4>
        <p><strong>Nama:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Nomor HP/WA:</strong> {{ user.phone }}</p>
  
        <h4>Data Produk</h4>
        <p><strong>Nama Produk:</strong> {{ product.name }}</p>
        <p><strong>Harga Produk:</strong> {{ formatPrice(product.price) }}</p>
  
        <div class="modal-actions">
          <button @click="closeModal">Tutup</button>
          <button @click="confirmOrder">OK</button>
          <button @click="cancelOrder">Cancel Order</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      order: Object,
      user: Object,
      product: Object,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      confirmOrder() {
        this.$emit('ok');
      },
      cancelOrder() {
        this.$emit('cancelOrder');
      },
      formatPrice(value) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 400px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }
  
  h4 {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  
  button {
    margin-top: 12px;
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
  
  .modal-actions {
    display: flex;
    justify-content: space-between;
  }
  </style>
  