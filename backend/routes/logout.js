const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Token kara listesi (RAM içinde tutulur)
const blacklistedTokens = new Set();

// Logout işlemi
router.post("/logout", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).json({ error: "Token bulunamadı" });
  }

  blacklistedTokens.add(token);
  return res.status(200).json({ message: "Logout başarılı" });
});

// Middleware: token doğrulama + blacklist kontrolü
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token bulunamadı" });

  if (blacklistedTokens.has(token)) {
    return res.status(403).json({ error: "Token geçersiz (logout edilmiş)" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "gizli_anahtar",
    (err, decoded) => {
      if (err) return res.status(403).json({ error: "Geçersiz token" });

      req.user = decoded;
      next();
    }
  );
};

module.exports = { router, authenticate };
