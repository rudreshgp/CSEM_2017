const express = require('express');
const router = express.Router();
let pokemon = [
  { name: 'Charmander', strength: 70 },
  { name: 'Rattata', strength: 45 },
  { name: 'Pikachu', strength: 60 },
];

// TODO: Middleware function #1.
// Create two random numbers, each
// between 0 and 20.
// Assign the two numbers to the request object
// property 'randomStrength'.

// Middleware function #2.
// Log on console who is fighting against whom.
router.use('/:p1/vs/:p2', (req, res, next) => {
  console.log(`The fight is on between ${req.params.p1} and ${req.params.p2}.`);
  next();
});

// TODO: POST request handler that performs the fight
// by comparing the pokemon's strength + their
// respective 'randomStrength'.
// Return winner and loser in the response.
router.post('/:p1/vs/:p2', (req, res) => {
  // TODO: implement the route handler
  res.end();
});

module.exports = router;
