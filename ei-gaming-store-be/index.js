// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import routes
import userRoutes from "./routes/userRoutes.js";

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// base route
app.get("/", (req, res) => {
  res.send("🚀 API Backend is running...");
});

// user routes
app.use("/api/users", userRoutes);

// start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
