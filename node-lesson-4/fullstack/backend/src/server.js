import express from "express";
import "dotenv/config";
import cors from "cors";

const countries = [
  {
    country: "Germany",
    capital: "Berlin",
    population: 3000000,
  },
  {
    country: "Spain",
    capital: "Madrid",
    population: 4000000,
  },
  {
    country: "UK",
    capital: "London",
    population: 9000000,
  },
];

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.json({ message: "Server working" });
});

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.post("/countries", (req, res) => {
  const country = req.body;
  countries.push(country);
  res.json({ message: "Country was added", countries });
});

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
