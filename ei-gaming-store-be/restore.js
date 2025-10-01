// restore.js
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { Client } from "pg";
import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config();

const BACKUP_DIR = path.join(process.cwd(), "backup");

async function listBackupFolders() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.error("❌ Belum ada folder backup.");
    process.exit(1);
  }
  return fs.readdirSync(BACKUP_DIR).filter(f => fs.statSync(path.join(BACKUP_DIR, f)).isDirectory());
}

async function restorePrismaSQL(filePath) {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });

  const sql = fs.readFileSync(filePath, "utf8");

  try {
    await client.connect();
    await client.query(sql);
    console.log("✅ Restore Prisma schema berhasil");
  } catch (err) {
    console.error("❌ Restore Prisma schema gagal:", err.message);
  } finally {
    await client.end();
  }
}

async function restoreDumpSQL(filePath) {
  try {
    execSync(`psql -U ${process.env.DB_USER} -d ${process.env.DB_NAME} -h ${process.env.DB_HOST} -f "${filePath}"`, {
      stdio: "inherit",
      env: process.env,
    });
    console.log("✅ Restore dump database berhasil");
  } catch (err) {
    console.error("❌ Restore dump database gagal:", err.message);
  }
}

async function main() {
  const backups = await listBackupFolders();

  if (backups.length === 0) {
    console.error("❌ Tidak ada backup tersedia.");
    return;
  }

  const { folder } = await inquirer.prompt([
    {
      type: "list",
      name: "folder",
      message: "Pilih folder backup yang mau direstore:",
      choices: backups,
    },
  ]);

  const prismaFile = path.join(BACKUP_DIR, folder, "prisma", "schema.sql");
  const dumpFile = path.join(BACKUP_DIR, folder, "dump", "dump.sql");

  const choices = [];
  if (fs.existsSync(prismaFile)) choices.push("Restore Prisma schema");
  if (fs.existsSync(dumpFile)) choices.push("Restore Dump SQL");

  if (choices.length === 0) {
    console.error("❌ Tidak ada file schema/dump di folder ini.");
    return;
  }

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Pilih apa yang mau direstore:",
      choices,
    },
  ]);

  if (action === "Restore Prisma schema") {
    await restorePrismaSQL(prismaFile);
  } else if (action === "Restore Dump SQL") {
    await restoreDumpSQL(dumpFile);
  }
}

main();
