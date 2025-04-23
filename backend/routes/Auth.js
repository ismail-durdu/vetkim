const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const router = express.Router();

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
  console.log("MySQL connected");
});

router.get("/login", (req, res) => {
  res.status(200).json({ message: "Login endpoint is working!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM users WHERE user_email = ?";
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Kullanıcı bulunamadı" });
      }

      const user = results[0];

      const isPasswordValid = await bcrypt.compare(
        password,
        user.user_password
      );
      if (isPasswordValid) {
        return res.status(401).json({ error: "Şifre yanlış" });
      }

      const token = jwt.sign(
        { id: user.user_id },
        process.env.JWT_SECRET || "gizli_anahtar",
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ message: "Giriş başarılı", token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

module.exports = router;
