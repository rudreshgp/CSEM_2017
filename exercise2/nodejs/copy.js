'use strict'
const fs = require('fs');

// Enter the file path as first argument, e.g.,
// $ node copy.js /path/to/dummy.txt
let f = process.argv[2];

// TODO: Create a readable stream from file f
let readable = fs.createReadStream(f, 'utf8');
// TODO: Create a writable stream that creates a
// new file with the original file path f
// plus the ending '-copy'
let writable = fs.createWriteStream(f.replace(".", "-copy."));
// TODO: Copy the content from f to f-copy
readable.on("end", () => {
    writable.end();
});
readable.on('data', (data) => {
    writable.write(data, 'utf8');
});
writable.on('finish', () => {
    console.log("Copy of file finished");
});
function errorOccured(error) {
    console.log(error);
}
writable.on('error', errorOccured);
readable.on('error', errorOccured);