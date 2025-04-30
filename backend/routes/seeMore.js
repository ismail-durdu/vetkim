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

// Klinik detaylarını çekme API'si
router.get("/clinic/:id", (req, res) => {
  const clinicId = req.params.id;
  const sql = `
       SELECT clinic.*, location.province 
       FROM clinic 
       JOIN location ON clinic.location_id = location.location_id 
       WHERE clinic.clinic_id = ?
    `;

  db.query(sql, [clinicId], (err, results) => {
    if (err) {
      console.error("Database query error:", err.sqlMessage);
      return res
        .status(500)
        .json({ error: "Database error", details: err.sqlMessage });
    }

    res.status(200).json(results[0]); // Tek bir klinik sonucu döndür
  });
});

module.exports = router;
