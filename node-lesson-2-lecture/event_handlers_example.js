const EventEmitter = require("events");
const emitter = new EventEmitter();

const firstHandler = (data) => {
  console.log("Firsthandler:", data);
};

const secondHandler = (data) => {
  console.log("secondHandler", data);
};

emitter.on("myEvent", firstHandler);
emitter.on("myEvent", secondHandler);

emitter.removeListener("myEvent", secondHandler);

emitter.emit("myEvent", "Testing");
