// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

function up(karma) {
  // TODO
}

let voter1 = up(100);
voter1(90); // upvote: 90, karma left: 10
voter1(15); // you are upvoting too quickly
// call after 5 sec
voter1(15); // not eough karma: 10
