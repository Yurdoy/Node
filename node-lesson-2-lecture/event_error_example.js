const EventEmitter = require("events");
const errorHandler = new EventEmitter();

errorHandler.on("error", (err) => {
  console.error(`Error occurred: ${err.message}`);
});

errorHandler.emit("error", new Error("Database connection failed"));
errorHandler.emit("error", new Error("File not found"));
