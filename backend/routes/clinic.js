const express = require("express");
const mysql = require("mysql2");

const router = express.Router();


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Emre541523.",
  database: "VetKim",
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
   SELECT clinic.clinic_id, clinic.clinic_name, location.province 
FROM clinic 
JOIN location ON clinic.location_id = location.location_id 
ORDER BY location.province ASC, RAND()
LIMIT 15;
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
