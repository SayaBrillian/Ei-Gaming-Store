import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { Client } from "pg";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- Supabase client (utama untuk FE/API) ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Environment variables SUPABASE_URL and SUPABASE_KEY are required.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// --- Opsional: local PostgreSQL (misal untuk backup/restore) ---
let localClient;
if (process.env.DB_NAME) {
  localClient = new Client({
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

// --- Contoh endpoint: get semua users dari Supabase ---
app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
