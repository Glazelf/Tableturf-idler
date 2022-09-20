const config = require("./config.json");
const net = require("net");
const port = 6000;
const host = config.switchIP; // change to switch's IP

const conn = net.createConnection(port, host); // connect
conn.setEncoding("utf-8"); // sends all commands as utf-8 (same as .encode())

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let endless = true; // set to false to stop the loop
while (endless === true) {

};