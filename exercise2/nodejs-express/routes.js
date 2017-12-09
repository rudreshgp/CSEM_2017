'use strict'
const express = require('express');
const router = express.Router();
let pokemon = [
  { name: 'Charmander', strength: 70 },
  { name: 'Rattata', strength: 45 },
  { name: 'Pikachu', strength: 60 },
];
let pokemonFound = (pokemonName) => (pokemonObject) => pokemonObject.name.toUpperCase() == pokemonName.toUpperCase();
// TODO: Middleware function #1.
// Create two random numbers, each
// between 0 and 20.
// Assign the two numbers to the request object
// property 'randomStrength'.
router.use('/:p1/vs/:p2', (req, res, next) => {

  //  var player1 = pokemon.find(pokemonFound(req.params.p1));
  //  var player2 = pokemon.find(pokemonFound(req.params.p2));
  //   if(player1!=undefined && player2!=undefined){
  if (req.params.p1 == req.params.p2) {
    res.writeHead(400, "Both players cannot be same");
    res.end();
  }
  var strength = {};
  strength.p1 = Math.floor(Math.random() * 20);
  strength.p2 = Math.floor(Math.random() * 20);
  req.randomStrength = strength;
  next();
  // }
  // else{
  //   res.writeHead(404,"Player Names not found");
  //   res.end();
  // }
});

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
  // TODO: implement the route 
  var player1 = pokemon.find(pokemonFound(req.params.p1));
  var player2 = pokemon.find(pokemonFound(req.params.p2));
  if (player1 != undefined && player2 != undefined) {
    var player1Won = (player1.strength + req.randomStrength.p1) > (player2.strength + req.randomStrength.p2);
    var winner = player1Won ? player1 : player2;
    var loser = player1Won ? player2 : player1;
    res.send({ "winner": winner.name, "loser": loser.name });
  }
  else {
    res.writeHead(404, "Player Names not found");
  }
  res.end();
});

module.exports = router;
