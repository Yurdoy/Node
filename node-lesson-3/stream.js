const fs = require("fs");

const stream = fs.createWriteStream("outputStream.txt", "utf8");
stream.write("firstString\n");
stream.write("secondString\n");
stream.write("thirdString\n");
stream.end();
stream.on("finish", () => {
  console.log("File was successfully written");
});
stream.on("error", () => {
  console.log("error");
});
