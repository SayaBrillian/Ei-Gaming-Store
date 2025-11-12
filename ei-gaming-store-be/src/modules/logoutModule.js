// src/modules/logoutModule.js
import express from 'express';

const router = express.Router();

/**
 * ======================
 * LOGOUT MODULE
 * ======================
 * Menghapus cookie auth_token agar sesi login berakhir.
 * Tidak perlu interaksi dengan database.
 */

router.post('/logout', (req, res) => {
  try {
    // Hapus cookie JWT dari browser user
    res.clearCookie('auth_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // cookie hanya dikirim di https saat production
      sameSite: 'strict', // mencegah CSRF
    });

    return res.status(200).json({
      message: 'Logout successful. Token has been cleared.',
    });
  } catch (err) {
    console.error('LOGOUT ERROR:', err);
    res.status(500).json({ message: 'Server error while logging out.' });
  }
});

export default router;
