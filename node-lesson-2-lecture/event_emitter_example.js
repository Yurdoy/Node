const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello there!");
});

emitter.emit("greet");
