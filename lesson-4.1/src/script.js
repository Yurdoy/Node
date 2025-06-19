import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;
app.get("/", (req, res) => {
  res.json({ message: "NodeJS Lesson 4" });
});

app.listen(PORT, () => {
  console.log(`server is listen on http://localhost:${PORT}`);
});
