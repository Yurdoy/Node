import express from "express";
import "dotenv/config";
import connectDb from "./src/config.js";
import { User } from "./src/models/user.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello Mongoose" });
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ message: "Users were received", allUsers });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User has already exist" });
    }
    const newUser = await User.create({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User was created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.put("/update-user/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    if (!updateUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
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
