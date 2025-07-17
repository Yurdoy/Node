import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import { User } from "./src/models/user.js";
import connectDb from "./src/config.js";
import { connect } from "mongoose";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./src/middleware/auth.js";
import cors from "cors";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "World... hold on..." });
});

app.post("/register", async (req, res) => {
  try {
    const { name, lastname, age, email, password } = req.body;
    if (!name || !lastname || !age || !email || !password) {
      res.status(404).json({ message: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      lastname,
      age,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User successfully registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
