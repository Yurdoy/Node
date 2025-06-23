const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.jpg");

fs.rename(filePath, path.join(__dirname, "renamedExample.jpg"), (err) => {
  if (err) {
    console.error("Error during renaming and moving file:", err);
    return;
  }
  console.log("File successfully renamed and moved.");

  fs.copyFile(
    path.join(__dirname, "renamedExample.jpg"),
    path.join(__dirname, "copyOfExample.jpg"),
    (err) => {
      if (err) {
        console.error("Error during copying file:", err);
        return;
      }
      console.log("File successfully copied");

      fs.unlink(path.join(__dirname, "renamedExample.jpg"), (err) => {
        if (err) {
          console.error("Error during deleting file:", err);
          return;
        }
        console.log("File successfully deleted.");
      });
    }
  );
});
