const fs = require("fs");

try {
  const data = fs.readFileSync("input1.txt", "utf8");
  fs.writeFileSync("output1.txt", data, "utf8");
  console.log("File successfully copied");
} catch (err) {
  console.error("Error while working with files:", err);
}
console.log("End of app");
