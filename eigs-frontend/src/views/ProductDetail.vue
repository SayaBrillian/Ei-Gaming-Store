<template>
  <div class="main-content" v-if="game">
<!-- Game List Sticky Header -->
<div class="game-mini-scroll sticky-header">
  <button class="scroll-btn" @click="scrollLeft">&lt;</button>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <div
      v-for="g in games"
      :key="g.id"
      class="mini-game-card"
      :class="{ active: g.id === game?.id }"
      @click="changeGame(g.id)"
    >
      <img :src="g.image" :alt="g.name" class="game-logo" />
      <p class="game-name">{{ g.name }}</p>
    </div>
  </div>
  <button class="scroll-btn" @click="scrollRight">&gt;</button>
</div>

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

    <div class="product-section">
      <div class="product-cards">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card" @click="selectProduct(product)">
          <p>{{ product.name }}</p>
          <p>Rp {{ product.price }}</p>
        </div>
      </div>

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
import games from "@/assets/tempodb/game.json";
import products from "@/assets/tempodb/product.json";

export default {
  data() {
    return {
      games: games,
      game: null,
      products: [],
      selectedProduct: null,
      form: {
        username: "",
      },
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => product.gameId === this.game?.id);
    },
  },
  methods: {
    selectProduct(product) {
      this.selectedProduct = product;
    },
    makeOrder() {
      if (this.selectedProduct) {
        alert(`Pesanan dibuat untuk ${this.form.username} dengan produk ${this.selectedProduct.name}`);
      } else {
        alert("Pilih produk terlebih dahulu sebelum membuat pesanan.");
      }
    },
    changeGame(id) {
      this.$router.push(`/products/${id}`);
    },
    loadData() {
      const gameId = parseInt(this.$route.params.id);
      this.products = products;
      this.game = games.find((g) => g.id === gameId);
      this.selectedProduct = null;
      this.form.username = "";
    },
    scrollLeft() {
      this.$refs.scrollWrapper.scrollLeft -= 150;
    },
    scrollRight() {
      this.$refs.scrollWrapper.scrollLeft += 150;
    },
  },
  mounted() {
    this.loadData();
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.loadData();
      },
      immediate: true,
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

.game-mini-scroll {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.sticky-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  /* Hapus box-shadow agar tidak ada bayangan */
  box-shadow: none;
  /* Hapus margin atau padding tambahan jika ada */
  margin-bottom: 0;
  padding-bottom: 0;
}


.scroll-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  flex: 1;
}

.mini-game-card {
  display: flex;
  align-items: center;
  min-width: 150px;
  padding: 8px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  gap: 10px;
}

.mini-game-card:hover {
  background-color: rgba(167, 139, 250, 0.1);
}

.mini-game-card.active {
  border-color: rgba(167, 139, 250, 1);
  background-color: rgba(167, 139, 250, 0.2);
}

.game-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}

.game-name {
  font-size: 1rem;
  font-weight: 600;
}

.scroll-btn {
  background-color: white;
  border: 1px solid #ccc;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: bold;
  color: rgba(75, 0, 130, 0.8);
  transition: background-color 0.3s ease;
  outline: none;
}

.scroll-btn:hover {
  background-color: rgba(167, 139, 250, 0.2);
}

/* Hilangkan garis saat diklik (focus & active) */
.scroll-btn:focus,
.scroll-btn:active {
  outline: none;
  box-shadow: none;
  border-color: #ccc;
}

.scroll-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  flex: 1;

  /* Sembunyikan scrollbar di berbagai browser */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.scroll-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
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
