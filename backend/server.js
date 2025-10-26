// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/careerconnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

//  User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

//  Register User
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username });

  if (existingUser) return res.json({ success: false, message: "Username already exists!" });

  const newUser = new User({ username, email, password });
  await newUser.save();

  res.json({ success: true, message: "Registration successful!" });
});

//  Login User
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) return res.json({ success: false, message: "Invalid credentials!" });

  res.json({ success: true, message: "Login successful!" });
});

//  Get User Info by Username
app.get("/user/:username", async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ success: false, message: "User not found!" });
  }

  res.json({
    success: true,
    username: user.username,
    email: user.email
  });
});


// Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
