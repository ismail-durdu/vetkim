const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/Auth");

dotenv.config(); // .env dosyasını yükler
const app = express();

// Middleware - SIRAYA DİKKAT
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Frontend URL
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);

// Server başlatma
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
