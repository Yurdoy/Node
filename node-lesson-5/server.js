import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Origin", "Content-Type");
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About");
  } else if (req.url === "/contacts") {
    res.end("Contacts");
  } else {
    res.statusCode = 404;
    res.end("404 Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
