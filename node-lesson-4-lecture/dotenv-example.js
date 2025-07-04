require("dotenv").config();
const http = require("http");

const port = process.env.PORT || 3000;

const myVar = process.env.MY_VAR;
console.log("MY_VAR", myVar);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
