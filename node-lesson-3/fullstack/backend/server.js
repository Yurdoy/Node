import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const arr = [
  {
    id: 1,
    title: "title 1",
    body: "body 1",
  },
  {
    id: 2,
    title: "title 2",
    body: "body 2",
  },
  {
    id: 3,
    title: "title 3",
    body: "body 3",
  },
];
app.get("/", (req, res) => {
  res.json({ arr });
});

app.listen(PORT, () => {
  console.log("Server is listening on http://127.0.0.1:3000/");
});
