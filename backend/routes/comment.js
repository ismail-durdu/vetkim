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

// Klinik bazlı yorumları çekme API'si
router.get("/comments/:clinicId", (req, res) => {
    const clinicId = req.params.clinicId;
    const sql = `
        SELECT c.comment_id, c.rate, c.remark, u.user_name, u.user_lastname 
        FROM comment c
        JOIN users_comment uc ON c.comment_id = uc.comment_id
        JOIN users u ON uc.user_id = u.user_id
        ORDER BY RAND()
        LIMIT 4;
    `;

    db.query(sql, [clinicId], (err, results) => {
        if (err) {
            console.error("Database query error:", err.sqlMessage);
            return res.status(500).json({ error: "Database error", details: err.sqlMessage });
        }

        res.status(200).json(results);
    });
});

module.exports = router;


