const { error } = require("console");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "test");

fs.mkdir(dirPath, (err) => {
  if (err) {
    console.error(error);
    return;
  }
  console.log("Direction successfully created");

  const filePath = path.join(dirPath, "example.txt");
  fs.writeFile(filePath, "Hello, Node.js!", (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File was created");

    fs.readdir(dirPath, (error, files) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(files);
    });
  });
});
