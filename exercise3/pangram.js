'use strict'
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var pangramRegEx = /([A-Z])(?!.*\1)/g;
process.stdin.on("data", function (chunk) {
    // console.log('test');
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    console.log(isPangram(input) ? "pangram" : "not pangram");
});
// process.on('SIGINT', function () {
//     // console.log('Over and Out!');
//     // process.exit(0);
//     console.log(isPangram(input));
//   });

function isPangram(inputString) {
    // TODO
    if (inputString != null) {
        var charactersPresent = inputString.toUpperCase().match(pangramRegEx);
        return charactersPresent != null ? charactersPresent.length > 25 : false;
    }
    return false;
}
