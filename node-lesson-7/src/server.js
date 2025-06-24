import express from "express";
import "dotenv/config";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");
    console.log(`Server running at port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
