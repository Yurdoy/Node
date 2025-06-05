const path = require("path");

const directory = "/home/user/documents";
const filename = "example.txt";

const fullPath = path.join(directory, filename);
console.log("Full path:", fullPath);

const extension = path.extname(fullPath);
console.log("Extension name:", extension);
