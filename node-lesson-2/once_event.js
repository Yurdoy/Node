const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.once("event", () => {
  console.log("done");
});

emitter.emit("event");
emitter.emit("event");
