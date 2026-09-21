const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const event = new MyEmitter();

event.on("greet", (name) => {
    console.log(`hello ${name}`);
});

event.on("exit", () => {
    console.log("exits my custom event emitter..");
});

event.emit("greet", "CSE36");

event.emit("exit");