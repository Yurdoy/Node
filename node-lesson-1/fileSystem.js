const fs = require("fs");

fs.writeFile("example.txt", "hello world", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("file has been created");
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const exampleVar = 42;

module.exports = exampleVar;
