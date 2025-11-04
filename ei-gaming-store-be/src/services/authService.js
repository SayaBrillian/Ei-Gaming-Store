import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "../../index.js";
//import redis from "../utils/redisClient.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

// ========== REGISTER ==========
export const handleRegister = async ({ fullname, username, email, password, phone_number }) => {
  if (!fullname || !username || !email || !password) {
    throw new Error("Missing required fields");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user baru ke Supabase
  const { data, error } = await supabase
    .from("user_main_data")
    .insert([{ fullname, username, email, password: hashedPassword, phone_number }])
    .select();

  if (error) throw new Error(error.message);

  return { message: "✅ User registered successfully", user: data[0] };
};

// ========== LOGIN ==========
export const handleLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password required");
  }

  // Cari user di database
  const { data: user, error } = await supabase
    .from("user_main_data")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    throw new Error("Invalid email or password");
  }

  // Cek password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid email or password");

  // Buat JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  // Simpan token ke Redis (opsional)
  //await redis.set(`user_session_${user.id}`, token, { EX: 7200 }); // 2 jam

  return {
    message: "✅ Login successful",
    user: { id: user.id, fullname: user.fullname, username: user.username, email: user.email },
    token,
  };
};
