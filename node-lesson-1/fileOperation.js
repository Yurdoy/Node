const fs = require("fs");

fs.writeFile("firstFile.txt", "This is a first file", (error) => {
  if (error) {
    console.log(error);
    return;
  }
});

fs.readFile("firstFile.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.unlink("firstFile.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been deleted");
});
