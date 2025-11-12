// src/modules/loginModule.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prismaClient.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

// ====================== LOGIN =======================
router.post('/login', async (req, res) => {
  try {
    const { email, password_now } = req.body;

    // Validasi input
    if (!email || !password_now) {
      return res.status(400).json({ message: 'Email & password required' });
    }

    // Cari user di database
    const user = await prisma.user_main_data.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cek password
    const isValid = await bcrypt.compare(password_now, user.password_now);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: user.id.toString() },
      JWT_SECRET,
      { expiresIn: '7d' } // durasi cookie (1 minggu)
    );

    // Simpan token di HTTP-only cookie
    res.cookie('auth_token', token, {
      httpOnly: true, // mencegah akses dari JS (aman dari XSS)
      secure: process.env.NODE_ENV === 'production', // hanya via HTTPS di production
      sameSite: 'strict', // mencegah CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
    });

    // Response sukses tanpa kirim token ke client
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id.toString(),
        token,
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
