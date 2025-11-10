// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { Client as PGClient } from "pg";
//import { createClient as createRedisClient } from "redis";

import authModule from "./src/modules/authModule.js"; // <--- baru

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ========== MIDDLEWARE ==========
app.use(cors());
app.use(express.json());

// ========== SUPABASE CLIENT ==========
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Environment variables SUPABASE_URL and SUPABASE_KEY are required.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("✅ Supabase connected");

// ========== LOCAL POSTGRESQL (optional backup) ==========
if (process.env.DB_NAME) {
  const localClient = new PGClient({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });

  localClient.connect()
    .then(() => console.log("✅ Local PostgreSQL connected"))
    .catch(err => console.warn("❌ Local PostgreSQL failed:", err.message));
}
/*
// ========== REDIS CLIENT ==========
export const redis = createRedisClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redis.on("error", (err) => console.error("❌ Redis error:", err));
redis.connect().then(() => console.log("✅ Redis connected"));
*/
// ========== ROUTES ==========
app.use("/api/auth", authModule); // <-- endpoint: /api/auth/register, /api/auth/login

// ========== TEST ROUTE ==========
app.get("/", (req, res) => {
  res.json({ message: "Server running 🚀" });
});

// ========== START SERVER ==========
app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});
