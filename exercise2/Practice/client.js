'use strict'
const net = require('net');
let client = new net.Socket();
// connecting to TCP server at localhost:9876
client.connect(9876, 'localhost', () => {
console.log('Client connected to server.');
client.write('Hello, TCP server.');
process.stdin.on('readable',()=>{
    let input = process.stdin.read();
    if(input!=null)
        client.write(input);       
});
});



