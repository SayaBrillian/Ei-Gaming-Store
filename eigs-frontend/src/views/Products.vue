<template>
  <div class="main-content">
    <h1 class="page-title">Daftar Game</h1>

    <div class="game-cards">
      <div
        v-for="(game, index) in games"
        :key="index"
        class="game-card"
        @click="goToDetail(game.id)"
      >
        <img :src="game.image" :alt="game.name" class="game-image" />
        <p class="game-title">{{ game.name }}</p>
      </div>

      <!-- Slot terakhir untuk 'Lainnya' -->
      <div class="game-card" @click="goToContact()">
        <div class="lainnya-slot">Lainnya</div>
      </div>
    </div>
  </div>
</template>

<script>
import gameData from "@/assets/tempodb/game.json";

export default {
  data() {
    return {
      games: gameData, // langsung assign dari import
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    goToContact() {
      alert("Akan diarahkan ke daftar admin (fitur ini akan datang).");
    },
  },
};
</script>


<style scoped>
.main-content {
    max-width: 1080px;
    width: 95vw;
    min-width: 320px;
    margin: auto;
    padding-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  
.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.game-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 game per baris */
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
  transform: scale(1.05);
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

.lainnya-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(167, 139, 250, 1);
  height: 150px;
}
</style>
