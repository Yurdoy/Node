import express from "express";
import "dotenv/config";
import { connectToDatabase, getDb } from "../config/config.js";

const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  {
    name: "name",
  },
];

app.get("/users", (req, res) => {
  res.send(`Hello ${users[0].name}`);
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.error(
      "Could not connect to the server due to mongoDb connection error"
    );
  });
