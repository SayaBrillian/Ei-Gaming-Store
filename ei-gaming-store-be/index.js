// index.js
import cookieParser from 'cookie-parser';
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { Client as PGClient } from "pg";

import loginModule from "./src/modules/loginModule.js";
import registerModule from "./src/modules/registerModule.js";
import logoutModule from './src/modules/logoutModule.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ========== MIDDLEWARE ==========
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

// ========== ROUTES ==========
app.use("/api/auth", registerModule);
app.use("/api/auth", loginModule);
app.use('/api/auth', logoutModule);

// ========== TEST ROUTE ==========
app.get("/", (req, res) => {
  res.json({ message: "Server running 🚀" });
});

// ========== START SERVER ==========
app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});
