// backup.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// --- Timestamp dan struktur folder ---
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const ROOT_BACKUP_DIR = path.join(process.cwd(), "backup", timestamp);
const PRISMA_DIR = path.join(ROOT_BACKUP_DIR, "prisma");
const DUMP_DIR = path.join(ROOT_BACKUP_DIR, "dump");
const CSV_DIR = path.join(ROOT_BACKUP_DIR, "csv");

// Buat folder backup kalau belum ada
[ROOT_BACKUP_DIR, PRISMA_DIR, DUMP_DIR, CSV_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// --- Ambil ENV untuk PostgreSQL ---
const PGHOST = process.env.DB_HOST;
const PGPORT = process.env.DB_PORT;
const PGUSER = process.env.DB_USER;
const PGPASSWORD = process.env.DB_PASS;
const PGDATABASE = process.env.DB_NAME;

// --- 1. Backup Prisma Schema ---
try {
  const prismaSchemaFile = path.join(PRISMA_DIR, `schema.sql`);
  const schemaDump = execSync(
    `npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script`
  ).toString();
  fs.writeFileSync(prismaSchemaFile, schemaDump);
  console.log(`✅ Prisma schema saved to ${prismaSchemaFile}`);
} catch (err) {
  console.error("❌ Failed to dump Prisma schema:", err.message);
}

// --- 2. Backup Database Full Dump (pg_dump) ---
try {
  const dumpFile = path.join(DUMP_DIR, `dump.sql`);
  execSync(
    `pg_dump -h ${PGHOST} -p ${PGPORT} -U ${PGUSER} -d ${PGDATABASE} -F p -f "${dumpFile}"`,
    { env: { ...process.env, PGPASSWORD } }
  );
  console.log(`✅ SQL dump saved to ${dumpFile}`);
} catch (err) {
  console.error("❌ Failed to run pg_dump:", err.message);
}

// --- 3. Backup Semua Tabel ke CSV ---
try {
  const tables = execSync(
    `psql -h ${PGHOST} -p ${PGPORT} -U ${PGUSER} -d ${PGDATABASE} -t -c "SELECT tablename FROM pg_tables WHERE schemaname='public';"`,
    { env: { ...process.env, PGPASSWORD } }
  )
    .toString()
    .trim()
    .split("\n")
    .map((t) => t.trim())
    .filter((t) => t);

  for (const table of tables) {
    const csvFile = path.join(CSV_DIR, `${table}.csv`);
    execSync(
      `psql -h ${PGHOST} -p ${PGPORT} -U ${PGUSER} -d ${PGDATABASE} -c "\\copy ${table} TO '${csvFile}' WITH CSV HEADER"`,
      { env: { ...process.env, PGPASSWORD } }
    );
    console.log(`✅ CSV backup saved for table ${table} -> ${csvFile}`);
  }
} catch (err) {
  console.error("❌ Failed to backup tables to CSV:", err.message);
}
