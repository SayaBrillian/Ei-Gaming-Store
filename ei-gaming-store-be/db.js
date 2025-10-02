import postgres from 'postgres';
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

// --- Koneksi PostgreSQL lokal ---
const localSql = postgres(process.env.LOCAL_DATABASE_URL, { max: 5 });

// --- Koneksi Supabase ---
const supaSql = postgres(process.env.SUPABASE_DATABASE_URL, { max: 5 });

// --- Fungsi pilih koneksi ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chooseDb() {
  return new Promise((resolve) => {
    console.log("Pilih database yang mau dipakai:");
    console.log("1) Lokal");
    console.log("2) Supabase");

    rl.question("Masukkan pilihan (1/2): ", (answer) => {
      rl.close();
      if (answer === "1") {
        console.log("✅ Menggunakan database lokal");
        resolve(localSql);
      } else if (answer === "2") {
        console.log("✅ Menggunakan database Supabase");
        resolve(supaSql);
      } else {
        console.log("❌ Pilihan tidak valid, default pakai lokal");
        resolve(localSql);
      }
    });
  });
}

// --- Export promise db connection ---
const db = await chooseDb();
export default db;
