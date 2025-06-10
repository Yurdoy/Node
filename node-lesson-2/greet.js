const EventEmitter = require("events");

const emitter = new EventEmitter();

const handler = (handler) => {
  console.log("Event happend");
};
emitter.on("greet", handler);

emitter.once("bigGreet", () => {
  console.log("Hello World again!");
});

emitter.emit("greet");
emitter.emit("bigGreet");
emitter.emit("bigGreet");

emitter.removeListener("greet", handler);
