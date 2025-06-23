import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET") {
    if (req.url === "/") {
      res.end("Добро пожаловать на главную страницу!\n");
    } else if (req.url === "/about") {
      res.end("Это страница о нас.\n");
    } else if (req.url === "/contact") {
      res.end("Это страница контактов.\n");
    } else {
      res.statusCode = 404;
      res.end("Page not Found\n");
    }
  } else if (req.method === "POST") {
    if (req.url === "/submit") {
      res.end("Form submitted!\n");
    } else {
      res.statusCode = 404;
      res.end("Page not found\n");
    }
  } else {
    res.statusCode = 405;
    res.end("Method not allowed\n");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
