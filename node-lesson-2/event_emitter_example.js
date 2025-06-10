const EventEmitter = require("events");

const emitter = new EventEmitter();

const handler = () => {
  console.log("Event deleted");
};
emitter.on("event_emitter_example", handler);

emitter.on("event_emitter_example", () => {
  console.log("Event conducted");
});

emitter.on("event_emitter_example", () => {
  console.log("Event conducted again");
});

emitter.emit("event_emitter_example");

emitter.removeListener("event_emitter_example", handler);

// emitter.emit("event_emitter_example");
