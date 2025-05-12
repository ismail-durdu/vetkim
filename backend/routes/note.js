const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Veritabanı bağlantısı
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Kimlik doğrulama middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Geçersiz token" });
    req.user = decoded;
    next();
  });
};

// ✅ Not ekleme
router.post("/notes", authenticate, (req, res) => {
  const { note_date, note_text } = req.body;
  const user_id = req.user.id;

  if (!note_date || !note_text) {
    return res.status(400).json({ error: "Tüm alanlar gerekli" });
  }

  const sql = "INSERT INTO notes (user_id, note_date, note_text) VALUES (?, ?, ?)";
  db.query(sql, [user_id, note_date, note_text], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }
    res.status(201).json({ message: "Not eklendi", note_id: result.insertId });
  });
});

// ✅ Kullanıcının notlarını listele
router.get("/notes", authenticate, (req, res) => {
  const user_id = req.user.id;

  const sql = "SELECT * FROM notes WHERE user_id = ? ORDER BY note_date DESC";
  db.query(sql, [user_id], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }
    res.status(200).json(results);
  });
});

module.exports = router;