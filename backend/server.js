// Require necessary modules
const express = require("express");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://philangcamu17:PHappyngc07@user-authentication.ic14ybr.mongodb.net/user-database",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
