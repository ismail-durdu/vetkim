const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

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
      req.user = decoded;
      next();
    }
  );
};

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

router.get("/", authenticate, (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT * 
    FROM users 
    INNER JOIN location USING(location_id) 
    WHERE user_id = ?
  `;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Veritabanı hatası:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    }

    const user = results[0];
    const { user_password, ...userWithoutPassword } = user;
    res.status(200).json({ user: userWithoutPassword });
  });
});

// PUT /api/profile - Profil güncelle
router.put("/", authenticate, (req, res) => {
  const userId = req.user.id;
  const {
    user_name,
    user_lastname,
    user_old,
    user_phone,
    user_gender,
    location_id,
    user_email,
  } = req.body;

  // Eksik alan kontrolü
  if (
    !user_name ||
    !user_lastname ||
    !user_old ||
    !user_gender ||
    !user_phone ||
    !user_email ||
    !location_id
  ) {
    return res
      .status(400)
      .json({ error: "Lütfen tüm gerekli alanları doldurun" });
  }

  const userQuery = `
    UPDATE users 
    SET user_name = ?, user_lastname = ?, user_old = ?, user_phone = ?, user_gender = ?, user_email = ?, location_id = ?
    WHERE user_id = ?
  `;

  db.query(
    userQuery,
    [
      user_name,
      user_lastname,
      user_old,
      user_phone,
      user_gender,
      user_email,
      location_id,
      userId,
    ],
    (err) => {
      if (err) {
        console.error("Kullanıcı güncelleme hatası:", err);
        return res.status(500).json({ error: "Kullanıcı güncelleme hatası" });
      }
      res.status(200).json({ message: "Profil başarıyla güncellendi" });
    }
  );
});

module.exports = router;
