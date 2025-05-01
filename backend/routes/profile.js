const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Middleware: JWT ile kimlik doğrulama
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token bulunamadı" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "gizli_anahtar",
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Geçersiz token" });
      }

      req.user = decoded; // decoded.id içinde user_id var
      next();
    }
  );
};

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
});

// /api/profile endpoint'i — sadece giriş yapan kullanıcı erişebilir
router.get("/", authenticate, (req, res) => {
  const userId = req.user.id;

  const query = "SELECT * FROM users INNER JOIN location USING(location_id) WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Veritabanı hatası:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    }

    const user = results[0];

    // Şifreyi döndürmeden bilgileri gönder
    const { user_password, ...userWithoutPassword } = user;

    res.status(200).json({ user: userWithoutPassword });
  });
});

module.exports = router;
