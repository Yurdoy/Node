const fs = require("fs");

fs.writeFile("example.txt", "Hello, Node.js", (err) => {
  if (err) {
    console.error("Error when writing file:", err);
    return;
  }
  console.log("File successfully recorded");
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error occur when reading file:", err);
    return;
  }
  console.log("File content", data);
});

fs.unlink("example.txt", (err) => {
  if (err) {
    console.error("Error occur when deleting file:", err);
    return;
  }
  console.log("File successfully deleted");
});
