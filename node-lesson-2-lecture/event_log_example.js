const EventEmitter = require("events");
const logger = new EventEmitter();

logger.on("info", (message) => {
  console.log(`Info: ${message}`);
});

logger.on("warning", (message) => {
  console.warn(`Warning: ${message}`);
});

logger.on("error", (message) => {
  console.error(`Error: ${message}`);
});

logger.emit("info", "Server started");
logger.emit("warning", "High memory usage");
logger.emit("error", "Server crashed");
