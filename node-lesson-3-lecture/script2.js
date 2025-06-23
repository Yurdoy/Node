const fs = require("fs");

const readStream = fs.createReadStream("input2.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("");
});

readStream.on("end", () => {
  console.log("File reading completed.");
});

readStream.on("error", (err) => {
  console.error("Error while reading file:", err);
});
