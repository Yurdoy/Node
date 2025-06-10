const { error } = require("console");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("info", (data) => {
  console.log("info: " + data);
});

emitter.on("warning", (data) => {
  console.log("warning: " + data);
});

emitter.on("error", (error) => {
  console.log("error: " + error);
});

emitter.emit("info", 200);
emitter.emit("warning", 201);
emitter.emit("error", 404);
