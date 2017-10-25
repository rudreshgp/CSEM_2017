let foo = [
  ['a', 9], ['b', 12], ['c', 5], ['d', 7],
];

// greaterThan closure
function greaterThan(min) {
  // TODO
}

let greaterThan5 = /* TODO use Array.filter + greaterThan */;
console.log('> 5 ', greaterThan5); // > 5  [ [ 'a', 9 ], [ 'b', 12 ], [ 'd', 7 ] ]
console.log('> 10 ', greaterThan10); // > 10  [ [ 'b', 12 ] ]
console.log('> 15 ', greaterThan15); // > 15  []
