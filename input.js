const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } 
};

const setupInput = function () {
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();
stdin.on("data", handleUserInput); //This is an event listener. The function will work when receives input from the keyboard.
return stdin;
};

module.exports = {setupInput};
