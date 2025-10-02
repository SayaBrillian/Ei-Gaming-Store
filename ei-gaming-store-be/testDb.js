// testDb.js
import dotenv from "dotenv";
dotenv.config();

import postgres from "postgres";

// --- Helper function untuk test koneksi ---
async function testConnection(label, connectionString) {
  const sql = postgres(connectionString, { ssl: { rejectUnauthorized: false } });

  try {
    const res = await sql`SELECT NOW() as now`;
    console.log(`✅ ${label} connected! Current time:`, res[0].now);
    sql.end({ timeout: 5 });
    return true;
  } catch (err) {
    console.error(`❌ ${label} connection failed:`, err.message);
    sql.end({ timeout: 5 });
    return false;
  }
}

// --- Ambil URL dari env ---
const SUPABASE_URL = process.env.SUPABASE_DIRECT_URL;
const LOCAL_URL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

async function main() {
  let connected = false;

  // coba Supabase dulu
  if (SUPABASE_URL) {
    connected = await testConnection("Supabase", SUPABASE_URL);
  }

  // kalau gagal coba lokal
  if (!connected) {
    connected = await testConnection("Local PostgreSQL", LOCAL_URL);
  }

  if (!connected) {
    console.log("⚠️ Tidak ada koneksi yang berhasil. Script tetap berjalan, cek credentials atau server.");
  } else {
    console.log("🎉 Koneksi berhasil, siap digunakan!");
  }
}

main();
