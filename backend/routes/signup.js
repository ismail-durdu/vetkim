const express = require("express");
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
  console.log("✅ MySQL connected successfully!");
});

router.post("/signup", (req, res) => {
  const { email, full_name, password } = req.body;

  console.log("📌 Signup request received:", req.body);

  if (!email || !full_name || !password) {
    return res.status(400).json({ error: "Tüm alanları doldurun!" });
  }

  try {
    const sqlCheck = "SELECT user_email FROM users WHERE user_email = ?";
    db.query(sqlCheck, [email], (err, results) => {
      if (err) {
        console.error("Database lookup error:", err.sqlMessage);
        return res
          .status(500)
          .json({ error: "Database lookup error", details: err.sqlMessage });
      }

      if (results.length > 0) {
        return res.status(409).json({ error: "Bu e-posta zaten kayıtlı!" });
      }

      const sqlInsert =
        "INSERT INTO users (user_email, user_name, user_password) VALUES (?, ?, ?)";
      db.query(sqlInsert, [email, full_name, password], (err, result) => {
        if (err) {
          console.error("Database insert error:", err.sqlMessage);
          return res
            .status(500)
            .json({ error: "Database error", details: err.sqlMessage });
        }
        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu" });
      });
    });
  } catch (error) {
    console.error("❌ Sunucu hatası:", error);
    res.status(500).json({ error: "Sunucu hatası", details: error.message });
  }
});

module.exports = router;
