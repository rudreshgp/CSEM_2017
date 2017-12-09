'use strict'
// TCP server
const net = require('net');
net.createServer(conn => {
console.log(`Connected
${conn.remoteAddress}:${conn.remotePort}`);
conn.on('data', data => {
console.log(`Received ${data}.`);
});
}).listen(9876); // listening on port 9876
