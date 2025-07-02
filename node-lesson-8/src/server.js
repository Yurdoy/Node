import express from "express";
import sequelize from "./config/db.js";
import "dotenv/config";
import User from "./models/user.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Hello, sequelize with Express");
});

app.get("/user", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.send(500).json(error);
  }
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(404).json({ message: "All fields are required" });
  }
  const user = await User.create({ name, email });
  res.status(201).json({ message: "User was successfully created", user });
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
