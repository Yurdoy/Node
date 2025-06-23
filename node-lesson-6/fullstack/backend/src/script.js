import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my site!" });
});

app.get("/products", (req, res) => {
  res.json({ message: "List of products" });
});

app.get("/products/:idx", (req, res) => {
  const id = req.params.idx;
  res.json({ message: `Product: ${id}` });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
