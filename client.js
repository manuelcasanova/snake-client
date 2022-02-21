const net = require("net");
//const { builtinModules } = require("module");


const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.123",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
console.log("Just a second, You are getting connected...")
  });

  return conn;
};

module.exports = {
  connect
};
