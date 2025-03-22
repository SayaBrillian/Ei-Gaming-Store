<template>
  <div class="main-content">
    <!-- Breadcrumb Navigation -->
    <nav class="breadcrumb-nav">
      <router-link to="/products">Produk</router-link> &gt; {{ game.name }}
    </nav>

    <!-- Detail Game -->
    <div class="game-detail">
      <img :src="game.image" :alt="game.name" class="game-image-large" />
      <div class="game-info">
        <h2>{{ game.name }}</h2>
        <p><strong>Tahun Rilis:</strong> {{ game.year }}</p>
        <p><strong>Developer:</strong> {{ game.developer }}</p>
        <p class="game-description">{{ game.description }}</p>
        <a :href="game.officialSite" target="_blank" class="official-site">Kunjungi Website Resmi</a>
      </div>
    </div>

    <!-- Bagian Produk dan Auto Fill Form -->
    <div class="product-section">
      <div class="product-cards">
        <div v-for="product in products" :key="product.id" class="product-card" @click="selectProduct(product)">
          <p>{{ product.name }}</p>
          <p>Rp {{ product.price }}</p>
        </div>
      </div>

      <!-- Auto Fill Form Tetap Ditampilkan -->
      <div class="order-form">
        <h2>Form Pesanan</h2>
        <p v-if="selectedProduct">Anda Memilih: {{ selectedProduct.name }}</p>
        <p v-else>Pilih produk dari daftar di sebelah kiri.</p>
        <form @submit.prevent="makeOrder">
          <input type="text" v-model="form.username" placeholder="Masukkan Username Game Anda" required />
          <button type="submit">Buat Pesanan</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        id: 1,
        name: "Genshin Impact",
        year: 2020,
        developer: "miHoYo",
        description: "Genshin Impact adalah game aksi RPG dengan dunia terbuka yang luas dan sistem pertarungan berbasis elemen.",
        image: "path/to/genshin-large.jpg",
        officialSite: "https://genshin.mihoyo.com",
      },
      products: [
        { id: 1, name: "60 Genesis Crystals", price: 15000 },
        { id: 2, name: "300 Genesis Crystals", price: 75000 },
        { id: 3, name: "980 Genesis Crystals", price: 250000 },
      ],
      selectedProduct: null, // Produk yang dipilih (default null)
      form: {
        username: "",
      },
    };
  },
  methods: {
    selectProduct(product) {
      this.selectedProduct = product; // Set produk yang dipilih
    },
    makeOrder() {
      if (this.selectedProduct) {
        alert(`Pesanan dibuat untuk ${this.form.username} dengan produk ${this.selectedProduct.name}`);
      } else {
        alert("Pilih produk terlebih dahulu sebelum membuat pesanan.");
      }
    },
  },
};
</script>

<style scoped>
.main-content {
  max-width: 1080px;
  width: 95vw;
  margin: auto;
  padding-top: 70px;
}

.breadcrumb-nav {
  font-size: 1rem;
  margin-bottom: 20px;
  color: rgba(85, 85, 85, 1);
}

.breadcrumb-nav a {
  color: rgba(167, 139, 250, 1);
  text-decoration: none;
}

.breadcrumb-nav a:hover {
  text-decoration: underline;
}

.game-detail {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.game-image-large {
  width: 300px;
  border-radius: 10px;
}

.game-info {
  flex: 1;
}

.official-site {
  display: inline-block;
  margin-top: 10px;
  color: rgba(167, 139, 250, 1);
  font-weight: 600;
  text-decoration: none;
}

.official-site:hover {
  text-decoration: underline;
}

/* Layout Produk dan Form */
.product-section {
  display: flex;
  gap: 20px;
}

.product-cards {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.product-card {
  padding: 15px;
  border: 1px solid rgba(167, 139, 250, 1);
  border-radius: 10px;
  background-color: white;
  text-align: center;
  cursor: pointer;
}

.product-card:hover {
  background-color: rgba(167, 139, 250, 0.1);
}

.order-form {
  width: 40%;
  background-color: rgba(245, 245, 245, 1);
  padding: 20px;
  border-radius: 10px;
}

button {
  background-color: rgba(167, 139, 250, 1);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(130, 102, 230, 1);
}
</style>
