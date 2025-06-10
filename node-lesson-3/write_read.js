const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error");
  }
  console.log(data);

  fs.writeFile("output.txt", data, "utf8", (err) => {
    if (err) {
      console.log("Error");
    }
    console.log("input.txt file content successfully copied");
  });
});
