// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote
'use strict'
function up(karma) {
  let votedTime = undefined;
  return function (upvote) {
    if (votedTime != undefined) {
      var elapsed = (Date.now() - votedTime) / 1000;
      if (elapsed <= 5) {
        console.log("you are upvoting too quickly");
        return;
      }
    }
    if ((karma - upvote) < 0) {
      console.log(`Not enough karma: ${karma}`);
      return;
    }
    karma -= upvote;
    votedTime = Date.now();
    console.log(`upvote: ${upvote}, karma left: ${karma}`);
  }
}
let voter1 = up(100);
voter1(90); // upvote: 90, karma left: 10
voter1(15); // you are upvoting too quickly
// call after 5 sec
setTimeout(function () { voter1(15) }, 5000); // not eough karma: 10
