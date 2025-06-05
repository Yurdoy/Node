const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request headers: ${req.headers}`);

  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Request received");
});

server.listen(3000, () => {
  console.log("Server is listening on port http://127.0.0.1:3000");
});
