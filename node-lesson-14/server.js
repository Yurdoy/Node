import express from "express";
import "dotenv/config";
import connectDb from "./src/config.js";
import { User } from "./src/models/user.js";
import { connect } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./src/middleware/auth.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello Mongoose" });
});

app.get("/users", authMiddleware, async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ message: "Users were received", allUsers });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      res.status(404).json({ message: "Invalid password" });
    }
    // res.status(201).json({ message: "You are successfully logged in" });
    const token = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        lastName: existingUser.lastName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Token successfully created", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { lastName, age, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User has already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      lastName,
      age,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User was successfully created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.put("/update-user/:id", async (req, res) => {
  try {
    const { lastName } = req.body;
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { lastName: lastName },
      { new: true }
    );
    if (!updateUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", deletedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
