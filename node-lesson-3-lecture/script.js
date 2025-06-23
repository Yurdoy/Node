const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error while reade file:", err);
    return;
  }
  console.log("File content:", data);

  fs.writeFile("output.txt", data, "utf8", (err) => {
    if (err) {
      console.error("Error while write file:", err);
      return;
    }
    console.log("File successfully copied");
  });
});

console.log("End of app");
