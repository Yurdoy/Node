const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("userConnected", (username) => {
  console.log(`Welcome, ${username}!`);
});

emitter.emit("userConnected", "Alice");
emitter.emit("userConnected", "Alice");
