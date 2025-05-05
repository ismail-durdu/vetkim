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

router.get("/clinics", (req, res) => {
  const sql = `
    SELECT clinic.clinic_id, clinic.clinic_name, location.province, clinic_image
    FROM clinic 
    JOIN location ON clinic.location_id = location.location_id  
    ORDER BY location.province ASC, clinic.clinic_name ASC
    LIMIT 15;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database query error:", err.sqlMessage);
      return res
        .status(500)
        .json({ error: "Database error", details: err.sqlMessage });
    }

    res.status(200).json(results);
  });
});

router.get("/search", (req, res) => {
  const query = req.query.q;
  const searchType = req.query.type || "clinic_name";

  if (!query) {
    return res.status(400).json({ error: "Arama terimi girin!" });
  }

  let sql;
  let params = [`${query}%`];

  if (searchType === "province") {
    sql = `
      SELECT clinic.clinic_id, clinic.clinic_name, location.province
      FROM clinic
      JOIN location ON clinic.location_id = location.location_id
      WHERE location.province LIKE ? 
      ORDER BY clinic.clinic_name ASC
      LIMIT 15;
    `;
  } else if (searchType === "clinic_name") {
    sql = `
      SELECT clinic.clinic_id, clinic.clinic_name, location.province 
      FROM clinic 
      JOIN location ON clinic.location_id = location.location_id 
      WHERE clinic.clinic_name LIKE ? 
      ORDER BY clinic.clinic_name ASC
      LIMIT 15;
    `;
  } else {
    return res.status(400).json({ error: "Geçersiz arama türü!" });
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error("Database query error:", err.sqlMessage);
      return res
        .status(500)
        .json({ error: "Database error", details: err.sqlMessage });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
