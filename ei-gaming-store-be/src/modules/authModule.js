// src/modules/authModule.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prismaClient.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// ===================== REGISTER =====================
router.post('/register', async (req, res) => {
  try {
    const {
      fullname,
      username,
      birth_date,
      birth_month,
      birth_year,
      email,
      phone_number,
      password_now
    } = req.body;

    // Validasi field wajib
    if (!fullname || !username || !email || !password_now) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    // Cek apakah email sudah digunakan
    const exist = await prisma.user_main_data.findUnique({ where: { email } });
    if (exist) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password_now, 10);

    // Simpan user baru
    const user = await prisma.user_main_data.create({
      data: {
        fullname,
        username,
        birth_date,
        birth_month,
        birth_year,
        email,
        phone_number,
        password_now: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        // Konversi BigInt ke string
        id: user.id.toString(),
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error('REGISTER ERROR:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ====================== LOGIN =======================
router.post('/login', async (req, res) => {
  try {
    const { email, password_now } = req.body;

    // Validasi input
    if (!email || !password_now) {
      return res.status(400).json({ message: 'Email & password required' });
    }

    // Cek user
    const user = await prisma.user_main_data.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cek password
    const isValid = await bcrypt.compare(password_now, user.password_now);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id.toString() }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id.toString(),
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error('LOGIN ERROR:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
