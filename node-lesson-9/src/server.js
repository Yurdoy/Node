import sequelize from "./config/db.js";
import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./models/User.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, sequelize with Express");
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(404).json({ message: "All field are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User successfully registered", User });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection to the database has been established successfully`);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
});
