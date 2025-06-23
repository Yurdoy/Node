const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "testDir");

fs.mkdir(dirPath, (err) => {
  if (err) {
    console.error("Error during creating dir:", err);
    return;
  }
  console.log('Directory "testDir" successfully created.');

  const filePath = path.join(dirPath, "example.txt");
  const fileContent = "Hello, Node.js!";

  fs.writeFile(filePath, fileContent, "utf8", (err) => {
    if (err) {
      console.error("Error during writing file:", err);
      return;
    }
    console.log(
      'File "example.txt" successfully created and filled with a text'
    );

    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error("Error during reading files content:", err);
        return;
      }
      console.log('Content of direction "test":', files);
    });
  });
});
