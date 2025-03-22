<template>
  <div class="main-content">
    <h1 class="page-title">Daftar Game</h1>

    <div class="game-cards">
      <div v-for="game in games" :key="game.id" class="game-card" @click="goToDetail(game.id)">
        <img :src="game.image" :alt="game.name" class="game-image" />
        <p class="game-title">{{ game.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        { id: 1, name: "Genshin Impact", image: "path/to/genshin.jpg" },
        { id: 2, name: "Game X", image: "path/to/game-x.jpg" },
        { id: 3, name: "Game Y", image: "path/to/game-y.jpg" },
        { id: 4, name: "Game Z", image: "path/to/game-z.jpg" },
        { id: 5, name: "Game A", image: "path/to/game-a.jpg" },
        { id: 6, name: "Game B", image: "path/to/game-b.jpg" },
        // Tambahkan daftar game lainnya sesuai kebutuhan
      ],
    };
  },
  methods: {
    goToDetail(gameId) {
      this.$router.push(`/products/${gameId}`);
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
  padding-left: 20px;
  padding-right: 20px;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.game-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.game-card {
  padding: 10px;
  border: 1px solid rgba(167, 139, 250, 1);
  border-radius: 10px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.game-card:hover {
  transform: scale(1.05); /* Sedikit efek zoom saat hover */
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.game-title {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(85, 85, 85, 1);
}
</style>
