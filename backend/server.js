const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const inappropriateWordsMiddleware = require("./middleware/InappropriateWordsMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://philangcamu17:PHappyngc07_%23@user-authentication.ic14ybr.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/register", inappropriateWordsMiddleware);

app.use("/api", authRoutes); // Update route prefix to /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
