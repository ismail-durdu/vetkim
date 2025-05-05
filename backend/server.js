const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Route dosyalarını içeri aktardık
const authRoutes = require("./routes/Auth");
const signupRoutes = require("./routes/signup");
const clinicRoutes = require("./routes/clinic");
const seeMoreRoutes = require("./routes/seeMore");
const commentRoutes = require("./routes/comment"); // Yorumları ekledik ✅
const profileRoute = require("./routes/profile");
const blogRoutes = require("./routes/blogs");
const petRoutes = require("./routes/pet");
const { router: logoutRoute, authenticate } = require("./routes/logout");

dotenv.config();
const app = express();

// Middleware ayarları
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// API Route'ları
app.use("/api/auth", authRoutes);
app.use("/api/auth", signupRoutes);

app.use("/api/profile", profileRoute);
app.use("/api", clinicRoutes);
app.use("/api", blogRoutes);
app.use("/api", logoutRoute);
app.use("/api", seeMoreRoutes);
app.use("/api", petRoutes);
app.use("/api", commentRoutes); // Yorumları API'ye dahil ettik ✅

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
