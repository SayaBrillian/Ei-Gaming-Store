<template>
  <div class="main-content" v-if="game">
    <!-- Sticky Game List -->
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

    <!-- Game Detail + Order Section -->
    <div class="content-grid">
      <!-- Game Detail -->
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

      <!-- Order Section -->
      <div class="product-section">
        <!-- Produk -->
        <div class="product-cards">
          <div v-for="product in filteredProducts" :key="product.id" 
  class="product-card" 
  :class="{ active: selectedProduct?.id === product.id }" 
  @click="selectProduct(product)">
  <p>{{ product.name }}</p>
  <p>Rp {{ product.price }}</p>
</div>

        </div>

        <!-- Form Pesanan -->
        <div class="order-form">
          <h2>Form Pesanan</h2>
          <p v-if="selectedProduct">Produk: {{ selectedProduct.name }} (Rp {{ selectedProduct.price }})</p>
          <p v-else>Pilih produk terlebih dahulu.</p>
          <form @submit.prevent="makeOrder">
            <input type="text" v-model="form.uid" placeholder="UID Game" required />
            <input type="text" v-model="form.server" placeholder="Server" required />
            <input type="email" v-model="form.email" placeholder="Email" required />
            <input type="tel" v-model="form.phone" placeholder="No. HP / WhatsApp" required />
            <button type="submit">Checkout</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import games from "@/assets/tempodb/game.json";
import products from "@/assets/tempodb/products.json";

export default {
  data() {
    return {
      games: games,
      game: null,
      products: [],
      selectedProduct: null,
      form: {
        uid: "",
        server: "",
        email: "",
        phone: "",
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
        alert(`Pesanan dibuat:\nProduk: ${this.selectedProduct.name}\nUID: ${this.form.uid}\nEmail: ${this.form.email}`);
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
      this.form = {
        uid: "",
        server: "",
        email: "",
        phone: "",
      };
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
.sticky-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  padding: 10px 0;
  margin-bottom: 20px;
}

.game-mini-scroll {
  display: flex;
  align-items: center;
  gap: 15px;
}

.scroll-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 15px;
  flex: 1;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.mini-game-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  min-width: 150px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.mini-game-card:hover {
  background-color: rgba(167, 139, 250, 0.1);
}
.mini-game-card.active {
  background-color: rgba(167, 139, 250, 0.2);
  border: 2px solid rgba(167, 139, 250, 1);
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
  font-size: 1.75rem;
  cursor: pointer;
  color: rgba(75, 0, 130, 0.8);
}

/* Layout: detail kiri 40%, order kanan 60% */
.content-grid {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

/* Detail game */
.game-detail {
  width: 40%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  /* Tambahan box-shadow yang lebih tegas */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}
.game-image-large {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
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

/* Order Section */
.product-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

/* Style untuk produk card */
.product-card {
  padding: 15px;
  border: 1px solid rgba(167, 139, 250, 1);
  border-radius: 10px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Hover efek untuk produk */
.product-card:hover {
  background-color: rgba(167, 139, 250, 0.1);
}

/* Style aktif produk yang dipilih */
.product-card.active {
  border-color: rgba(167, 139, 250, 1);
  background-color: rgba(167, 139, 250, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
  

.order-form {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.order-form p {
  font-weight: 500;
  margin-bottom: 10px;
}

.order-form form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background-color: white;
}

button {
  padding: 12px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #10b981;
  color: white;
}
button[type="submit"]:hover {
  background-color: #059669;
}
</style>
