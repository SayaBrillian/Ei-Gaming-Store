import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../utils/prismaClient.js';

const router = express.Router();

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

    if (!fullname || !username || !email || !password_now) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const exist = await prisma.user_main_data.findUnique({ where: { email } });
    if (exist) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password_now, 10);

    const user = await prisma.user_main_data.create({
      data: {
        fullname,
        username,
        birth_date: Number(birth_date),
        birth_month: Number(birth_month),
        birth_year: Number(birth_year),
        email,
        phone_number,
        password_now: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
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

export default router;
