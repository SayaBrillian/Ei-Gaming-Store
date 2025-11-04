import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Endpoint register user baru
router.post("/register", registerUser);

// Endpoint login user
router.post("/login", loginUser);

export default router;
