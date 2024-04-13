const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // Save the user to the database
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found");
    }
    // Compare passwords
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "PHappyngc07_#", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});

module.exports = router;
