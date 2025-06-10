import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});
app.listen(PORT, () => {
  console.log("server is listening on http://127.0.0.1:3000");
});
