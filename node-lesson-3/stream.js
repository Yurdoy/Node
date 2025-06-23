const fs = require("fs");

const readStream = fs.createReadStream("inputStream.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Chunk received", chunk);
});

readStream.on("end", () => {
  console.log("File reading completed.");
});

readStream.on("error", (err) => {
  console.error("Error during reading file:", err);
});
