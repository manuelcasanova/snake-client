const net = require("net");
//const { builtinModules } = require("module");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //   conn.on("connect", () => {
  // console.log("Just a second, You are getting connected...")
  //   });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MCF"); //Sends initials to the snake
    //conn.write("Move: up"); //Sends to server the command move up
    // conn.write("Move: up"); //What happens if we send more than once successive move message? Nothing!
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 50) //What happens if we delay each message instead? Something!
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 300); //What happens if I use setInterval in order to continuously move the snake up?
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
console.log("Just a moment, you are getting connected...");

module.exports = {
  connect
};
