const EventEmitter = require("events");
const asyncOperations = new EventEmitter();

asyncOperations.on("operationComplete", (operation) => {
  crossOriginIsolated.log(`Operation ${operation} completed successfully`);
});

setTimeout(() => {
  asyncOperations.emit("operationComplete", "Download");
}, 2000);

setTimeout(() => {
  asyncOperations.emit("operationComplete", "Upload");
}, 4000);
