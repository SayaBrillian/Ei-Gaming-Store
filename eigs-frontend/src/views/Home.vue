<template>
  <div class="main-content">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Top-up Game Cepat, Aman, dan Terpercaya!</h1>
      <p>Nikmati pengalaman top-up instan dengan harga terbaik dan dukungan pelanggan 24/7.</p>
      <router-link to="/products" class="cta-button">Mulai Top-Up Sekarang</router-link>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us">
      <h2>Kenapa Memilih Kami?</h2>
      <div class="features">
        <div class="feature-card">
          <i class="feature-icon">⚡</i>
          <h3>Top-Up Instan</h3>
          <p>Proses top-up cepat tanpa delay, langsung masuk ke akun Anda.</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">🔒</i>
          <h3>Transaksi Aman</h3>
          <p>Semua transaksi Anda terlindungi dengan enkripsi canggih.</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">💰</i>
          <h3>Harga Kompetitif</h3>
          <p>Kami menyediakan harga bersaing untuk semua jenis top-up.</p>
        </div>
        <div class="feature-card">
          <i class="feature-icon">🛡️</i>
          <h3>Dukungan Pelanggan 24/7</h3>
          <p>Tim kami siap membantu Anda kapan saja dan di mana saja.</p>
        </div>
      </div>
    </section>

    <!-- Produk Populer Section -->
    <section class="popular-products">
      <h2>Produk Populer</h2>
      <div class="product-grid">
        <div class="product-card">
          <img src="" alt="Mobile Legends">
          <h3>Mobile Legends</h3>
          <router-link to="/products" class="product-link">Top-Up Sekarang</router-link>
        </div>
        <div class="product-card">
          <img src="" alt="Free Fire">
          <h3>Free Fire</h3>
          <router-link to="/products" class="product-link">Top-Up Sekarang</router-link>
        </div>
        <div class="product-card">
          <img src="" alt="PUBG Mobile">
          <h3>PUBG Mobile</h3>
          <router-link to="/products" class="product-link">Top-Up Sekarang</router-link>
        </div>
      </div>
    </section>

    <!-- Testimoni Section -->
    <section class="testimonials">
      <h2>Apa Kata Pelanggan Kami?</h2>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p>"Layanan yang sangat cepat dan terpercaya. Top-up masuk dalam hitungan detik!"</p>
          <span>- Andi, Jakarta</span>
        </div>
        <div class="testimonial-card">
          <p>"Saya selalu top-up di sini karena harganya lebih murah dan prosesnya instan."</p>
          <span>- Rina, Bandung</span>
        </div>
        <div class="testimonial-card">
          <p>"Dukungan pelanggannya sangat membantu dan ramah. Recommended!"</p>
          <span>- Budi, Surabaya</span>
        </div>
      </div>
    </section>

    <!-- Promo Section -->
    <section class="promo">
      <h2>Promo Spesial</h2>
      <p>Diskon hingga <strong>50%</strong> untuk top-up selama event tertentu. Jangan lewatkan!</p>
      <router-link to="/products" class="promo-button">Lihat Promo</router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-content {
  max-width: 1080px;
  margin: auto;
  padding: 70px 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color: rgba(167, 139, 250, 1);
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: rgba(130, 100, 230, 1);
}

/* Why Choose Us Section */
.why-choose-us {
  margin: 40px 0;
}

.features {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  width: 200px;
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  color: rgba(167, 139, 250, 1);
}

/* Popular Products Section */
.product-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.product-card {
  text-align: center;
  padding: 15px;
  border: 2px solid rgba(167, 139, 250, 0.6); /* Border ungu */
  border-radius: 10px; /* Membuat sudut melengkung */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Tambahan bayangan */
  transition: transform 0.3s ease; /* Animasi saat hover */
}

.product-card:hover {
  transform: translateY(-5px); /* Efek hover: naik sedikit */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Tambahan bayangan saat hover */
}

.product-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: rgba(167, 139, 250, 1);
  font-weight: bold;
}

/* Testimonial Section */
.testimonial-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.testimonial-card {
  background-color: rgba(245, 245, 245, 1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
}

/* Promo Section */
.promo {
  text-align: center;
  margin-top: 40px;
}

.promo-button {
  padding: 10px 20px;
  background-color: rgba(245, 139, 250, 1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
