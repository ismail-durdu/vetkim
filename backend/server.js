const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));


const authRoutes = require("./routes/Auth");
const signupRoutes = require("./routes/signup");
const clinicRoutes = require("./routes/clinic");
const seeMoreRoutes = require("./routes/seeMore");
const commentRoutes = require("./routes/comment");
const profileRoute = require("./routes/profile");
const blogRoutes = require("./routes/blogs");
const petRoutes = require("./routes/pet");
const appointmentRoutes = require("./routes/appoinment");
const { router: logoutRoute, authenticate } = require("./routes/logout");
const notesRoutes = require("./routes/notes");


app.use("/api/auth", authRoutes);
app.use("/api/auth", signupRoutes);
app.use("/api", clinicRoutes);
app.use("/api", blogRoutes);
app.use("/api", logoutRoute);
app.use("/api", seeMoreRoutes);
app.use("/api", petRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", commentRoutes);
app.use("/api", profileRoute);
app.use("/api", notesRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});