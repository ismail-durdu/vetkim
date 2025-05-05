const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/Auth");
const signupRoutes = require("./routes/signup");
const clinicRoutes = require("./routes/clinic");
const seeMoreRoutes = require("./routes/seeMore");
const commentRoutes = require("./routes/comment");
const profileRoute = require("./routes/profile");
const blogRoutes = require("./routes/blogs");
const petRoutes = require("./routes/pet");
const appoinmentRoutes = require("./routes/appoinment");
const { router: logoutRoute, authenticate } = require("./routes/logout");

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/auth", signupRoutes);

app.use("/api/profile", profileRoute);
app.use("/api", clinicRoutes);
app.use("/api", blogRoutes);
app.use("/api", logoutRoute);
app.use("/api", seeMoreRoutes);
app.use("/api", petRoutes);
app.use("/api", appoinmentRoutes);
app.use("/api", commentRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
