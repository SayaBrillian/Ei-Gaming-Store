<template>
  <div class="main-content">
    <h1>About Us</h1>

    <p class="intro-paragraph">
      Selamat datang di <strong>EI Gaming Store</strong>, tempat terbaik untuk memenuhi kebutuhan top-up game Anda. Kami berdedikasi untuk memberikan layanan yang cepat, aman, dan andal, sehingga pengalaman gaming Anda menjadi lebih seru dan tanpa hambatan.
    </p>

    <h2>Our Story</h2>
    <p>
      EI Gaming Store didirikan pada tahun <strong>2022</strong> dengan tujuan untuk membantu para gamer mengakses top-up game dengan cara yang lebih mudah dan terjangkau. Sejak awal berdiri, kami memahami bahwa kebutuhan akan top-up yang cepat dan aman menjadi prioritas bagi komunitas gamer.
    </p>
    <p>
      Dalam perjalanannya, kami menghadapi berbagai tantangan, mulai dari membangun sistem yang efisien hingga mendapatkan kepercayaan pelanggan. Namun, berkat komitmen kami terhadap kualitas layanan, kami berhasil tumbuh menjadi salah satu penyedia top-up game yang diandalkan oleh ribuan pelanggan di seluruh Indonesia.
    </p>

    <h2>Our Vision</h2>
    <p>
      Menjadi penyedia layanan top-up game terkemuka di Indonesia yang dikenal karena kecepatan, keamanan, dan pelayanan pelanggan yang unggul.
    </p>

    <h2>Our Mission</h2>
    <ul>
      <li>Memberikan layanan top-up yang cepat, aman, dan mudah digunakan.</li>
      <li>Menyediakan berbagai pilihan game populer dengan harga bersaing.</li>
      <li>Membangun hubungan jangka panjang dengan pelanggan melalui layanan berkualitas tinggi dan dukungan pelanggan yang ramah.</li>
    </ul>

    <h2>Our Core Values</h2>
    <ul>
      <li><strong>Kejujuran:</strong> Kami menjunjung tinggi transparansi dan kejujuran dalam setiap transaksi.</li>
      <li><strong>Inovasi:</strong> Kami terus berinovasi untuk meningkatkan kualitas layanan kami.</li>
      <li><strong>Kepuasan Pelanggan:</strong> Kami berkomitmen untuk memberikan pengalaman terbaik bagi pelanggan kami.</li>
      <li><strong>Kecepatan:</strong> Kami memahami bahwa waktu adalah segalanya bagi para gamer, dan kami berupaya memberikan layanan yang cepat dan efisien.</li>
    </ul>

    <h2>Meet Our Team</h2>
    <div class="team-container">
      <div class="team-card">
        <img src="https://via.placeholder.com/150" alt="Staff Photo" class="staff-photo">
        <h3>Jane Doe</h3>
        <p class="staff-position">CEO & Founder</p>
        <p class="staff-description">
          Jane mendirikan EI Gaming Store pada tahun 2022 dan telah membawa layanan ini berkembang pesat. 
          Ia bertanggung jawab atas visi dan strategi perusahaan.
        </p>
      </div>

      <div class="team-card">
        <img src="https://via.placeholder.com/150" alt="Staff Photo" class="staff-photo">
        <h3>John Smith</h3>
        <p class="staff-position">Head of Operations</p>
        <p class="staff-description">
          John mengelola operasional sehari-hari untuk memastikan layanan top-up berjalan lancar, aman, dan efisien.
        </p>
      </div>

      <div class="team-card">
        <img src="https://via.placeholder.com/150" alt="Staff Photo" class="staff-photo">
        <h3>Emily Johnson</h3>
        <p class="staff-position">Customer Support Lead</p>
        <p class="staff-description">
          Emily memimpin tim dukungan pelanggan dan memastikan setiap pengguna mendapatkan bantuan yang cepat dan ramah.
        </p>
      </div>
    </div>

    <p class="closing-paragraph">
      Terima kasih telah mempercayai <strong>EI Gaming Store</strong> sebagai mitra top-up game Anda. Kami akan terus berupaya untuk memberikan yang terbaik bagi komunitas gamer di Indonesia. Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi kami.
    </p>
  </div>
</template>

<style scoped>
.main-content {
  max-width: 1080px;
  width: 95vw;
  margin: auto;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: rgba(167, 139, 250, 1);
    margin-bottom: 20px;
}

.intro-paragraph, .closing-paragraph {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.team-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.team-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  text-align: center;
}

.staff-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h3 {
  margin: 10px 0 5px;
  font-size: 1.25rem;
}

.staff-position {
  font-size: 0.95rem;
  font-weight: bold;
  color: rgba(167, 139, 250, 1);
}

.staff-description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
}
</style>
