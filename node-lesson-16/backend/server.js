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

    const token = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        lastname: existingUser.lastname,
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

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
