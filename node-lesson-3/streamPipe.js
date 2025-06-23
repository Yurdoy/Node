const fs = require("fs");

const readStream = fs.createReadStream("inputPipe.txt", "utf8");
const writeStream = fs.createWriteStream("outputPipe.txt", "utf8");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Files copying completed.");
});

readStream.on("error", (err) => {
  console.error("Error during file reading", err);
});

writeStream.on("error", (err) => {
  console.error("Error during file reading", err);
});
