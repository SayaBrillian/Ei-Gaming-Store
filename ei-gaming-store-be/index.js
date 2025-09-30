const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route contoh
app.get('/', (req, res) => {
  res.send('Hello World dari Express.js 🚀');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
