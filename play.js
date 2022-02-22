const {connect} = require("./client");
const {setupInput} = require("./input");

//connect();
let c = connect();
setupInput(c); //pass the object returned from connect into the setupInput function.

module.exports = {connect};
