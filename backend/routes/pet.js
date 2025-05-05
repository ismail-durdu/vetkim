const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
console.log("🔍 Decoded token:");

// Middleware'i doğrudan burada tanımlıyoruz!
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
      console.log("🔍 Decoded token:");
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
  console.log("✅ MySQL connected successfully!");
});

// Kullanıcının pet bilgilerini çekme API'si
router.get("/pets", authenticate, (req, res) => {
  const userId = req.user.id; // user_id olarak aldık

  const sql = ` 
    SELECT 
      p.pet_id, 
      p.pet_name, 
      p.pet_gender, 
      p.pet_old, 
      ps.species,
      ps.type
    FROM user_pet up
    JOIN pet p ON up.pet_id = p.pet_id
    
    JOIN pet_species ps ON p.species_id = ps.species_id
    WHERE up.user_id = ?;
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Veritabanı hatası:", err);
      return res.status(500).json({ error: "Veritabanı hatası" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: "Bu kullanıcıya ait pet bulunamadı!" });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
