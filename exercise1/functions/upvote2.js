// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

// In addition to the previous upvote closure, voters can recharge
// their karma with a recharge(number) method

function up(karma) {
  // TODO
}

let voter1 = up(100);
voter1.vote(90); // upvote: 90, karma left: 10
voter1.recharge(20); // 20 recharged. Total karma now: 30
// call after 5 sec
voter1.vote(15); // upvote: 15, karma left: 15
