const fs = require("fs");

fs.readFile("input2.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error");
  }
  console.log(data);

  fs.writeFile("output2.txt", data, "utf8", (err) => {
    if (err) {
      console.log("Error");
    }
    console.log("input.txt file content successfully copied");
  });
});

try {
  const data = fs.readFileSync("input2.txt", "utf8");
  fs.writeFileSync("input2.txt", data);
  console.log(data);
  console.log("input2.txt file content successfully copied");
} catch {
  console.error(error);
}
