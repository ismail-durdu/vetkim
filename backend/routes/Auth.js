const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
require("dotenv").config();

const router = express.Router();

// Veritabanı bağlantısı
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Emre541523.",
  database: process.env.DB_NAME || "VetKim",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    process.exit(1);
  }
  console.log("✅ MySQL connected");
});

// Login endpoint
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE user_email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Kullanıcı bulunamadı" });
    }

    const user = results[0];

    if (password !== user.user_password) {
      return res.status(401).json({ error: "Şifre yanlış" });
    }

    const token = jwt.sign(
      { id: user.user_id },
      process.env.JWT_SECRET || "gizli_anahtar",
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Giriş başarılı", token });
  });
});

module.exports = router;
