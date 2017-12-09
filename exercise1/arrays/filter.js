'use strict'
let foo = [
  ['a', 9], ['b', 12], ['c', 5], ['d', 7],
];

// greaterThan closure
function greaterThan(min) {
  // TODO
  return foo.filter((v) => { return v[1]> min; });
}

let greaterThan5 = greaterThan(5);/* TODO use Array.filter + greaterThan */;
console.log('> 5 ', greaterThan5); // > 5  [ [ 'a', 9 ], [ 'b', 12 ], [ 'd', 7 ] ]
let greaterThan10 = greaterThan(10);
console.log('> 10 ', greaterThan10); // > 10  [ [ 'b', 12 ] ]
let greaterThan15 = greaterThan(15);
console.log('> 15 ', greaterThan15); // > 15  []
