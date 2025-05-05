const express = require("express");
const mysql = require("mysql2");
const router = express.Router();
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Emre541523.",
  database: process.env.DB_NAME || "VetKim",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL bağlantı hatası:", err);
    process.exit(1);
  }
  console.log("✅ MySQL appointment bağlantısı başarılı!");
});

router.post("/appointments", (req, res) => {
  console.log("📅 Yeni randevu ekleniyor!", req.body);
  const { appointment_date, appointment_time, appointment_cost } = req.body;

  if (!appointment_date || !appointment_time || !appointment_cost) {
    return res.status(400).json({ error: "Eksik bilgi, lütfen tüm alanları doldurun!" });
  }

  const formattedDateTime = `${appointment_date} ${appointment_time}:00`;

  const sqlAppointment = `
    INSERT INTO appointment (appointment_date, appoinment_time, appointment_cost) 
    VALUES (?, ?, ?);
  `;

  db.query(sqlAppointment, [formattedDateTime, appointment_time, appointment_cost], (err, results) => {
    if (err) {
      console.error("❌ Randevu ekleme hatası:", err.sqlMessage);
      return res.status(500).json({ error: "Randevu eklenirken hata oluştu!", details: err.sqlMessage });
    }

    res.status(201).json({ message: "✅ Yeni randevu başarıyla eklendi!", appointment_id: results.insertId });
  });
});

module.exports = router;
