const { stdout } = require("process");

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

//Bind the movement commands to the w a s d keys

const w = "Move: up";
const a = "Move: left";
const s = "Move: down";
const d = "Move: right";

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write(w) //stdout.write(w) printed "Move: up"
  } else if (key === "a") {
    connection.write(a) 
  } else if (key === "s") {
    connection.write(s) 
  } else if (key === "d") {
    connection.write(d) 
  }




};


module.exports = {setupInput};
