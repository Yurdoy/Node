import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT;

const products = [
  {
    name: "apple",
    price: 5,
    desc: "red and sweet",
  },
  {
    name: "carrot",
    price: 3,
    desc: "orange color",
  },
  {
    name: "watermelon",
    price: 6,
    desc: "stripe and sweet",
  },
];

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("World... hold on");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products/add", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({ message: "product was added", products });
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
