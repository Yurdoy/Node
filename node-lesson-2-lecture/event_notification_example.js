const EventEmitter = require("events");
const notifications = new EventEmitter();

notifications.on("newMessage", (user, message) => {
  console.log(`New message for ${user}: ${message}`);
});

notifications.emit("newMessage", "Alice", "Hello, Alice!");
notifications.emit("newMessage", "Bob", "Hi, Bob!");
