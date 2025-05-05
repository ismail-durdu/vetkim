const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

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

router.get("/blogs", (req, res) => {
  const sql = `SELECT blog_id, blog_name,blog_text ,blog_image  FROM blog ORDER BY blog_id DESC LIMIT 15`;

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

module.exports = router;
