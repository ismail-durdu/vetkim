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
    user_country,
    user_province,
  } = req.body;

  // Eksik alan kontrolü
  if (
    !user_name ||
    !user_lastname ||
    !user_old ||
    !user_gender ||
    !user_country ||
    !user_province
  ) {
    return res
      .status(400)
      .json({ error: "Lütfen tüm gerekli alanları doldurun" });
  }

  // Location güncelle veya ekle
  const locationQuery = `
    UPDATE location 
    SET country = ?, province = ? 
    WHERE location_id = (SELECT location_id FROM users WHERE user_id = ?)
  `;

  db.query(locationQuery, [user_country, user_province, userId], (err) => {
    if (err) {
      console.error("Konum güncelleme hatası:", err);
      return res.status(500).json({ error: "Konum güncelleme hatası" });
    }

    // User güncelle
    const userQuery = `
      UPDATE users 
      SET user_name = ?, user_lastname = ?, user_old = ?, user_phone = ?, user_gender = ?
      WHERE user_id = ?
    `;

    db.query(
      userQuery,
      [user_name, user_lastname, user_old, user_phone, user_gender, userId],
      (err) => {
        if (err) {
          console.error("Kullanıcı güncelleme hatası:", err);
          return res.status(500).json({ error: "Kullanıcı güncelleme hatası" });
        }
        res.status(200).json({ message: "Profil başarıyla güncellendi" });
      }
    );
  });
});

module.exports = router;
