const express = require("express");
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
  console.log("✅ MySQL connected successfully!");
});

router.get("/pets", (req, res) => {
  const sql = `
    SELECT p.pet_id, p.pet_name, p.pet_gender, p.pet_old, ps.type, ps.species 
    FROM pet p 
    JOIN pet_species ps ON p.species_id = ps.species_id
    ORDER BY p.pet_name ASC;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database query error:", err.sqlMessage);
      return res.status(500).json({ error: "Database error", details: err.sqlMessage });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
