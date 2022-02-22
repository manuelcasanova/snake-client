const { stdout } = require("process");
const { connect } = require("./client");
const { UP, DOWN, LEFT, RIGHT, message, hello, hola, bye } = require("./constants");

let connection; //Stores the active TCP connection object. Otherwise the input module cannot send messages to the server.


const setupInput = function (conn) {
connection = conn; //changes setupInput() to accept an object that lets you interact with the server. 
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();
stdin.on("data", handleUserInput); //This is an event listener. The function will work when receives input from the keyboard.
return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write(UP) //stdout.write(w) printed "Move: up"
  } else if (key === "a") {
    connection.write(LEFT) 
  } else if (key === "s") {
    connection.write(DOWN) 
  } else if (key === "d") {
    connection.write(RIGHT) 
  } else if (key === "h") {
    connection.write(message + hello)
  } else if (key === "o") {
    connection.write(message + hola)
  } else if (key === "b") {
    connection.write(message + bye)
  }



};


module.exports = {setupInput};
