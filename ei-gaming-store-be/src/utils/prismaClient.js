// src/utils/prismaClient.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Opsional: tangani error global jika koneksi terputus
prisma.$connect()
  .then(() => console.log('✅ Prisma connected to database'))
  .catch((err) => console.error('❌ Prisma connection error:', err));

export default prisma;
