1. Dependencies - express, nodemon, dotenv;

2. {
   "name": "backend",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "dev": "nodemon ./src/script.js"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "type": "module",
   "devDependencies": {
   "nodemon": "^3.1.10"
   },
   "dependencies": {
   "cors": "^2.8.5",
   "dotenv": "^16.5.0",
   "express": "^5.1.0"
   }
   }

3. import express from "express";
   import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my site!" });
});

app.listen(PORT, () => {
console.log(`Server is listening on port http://localhost:${PORT}`);
});
