// A "helper" function that creates
// some non-deterministic behavior
'use strict'
function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

// TODO: write the three missing Promises and assign them to the variables
// "welcome", "to", and "paradise"
let welcome = new Promise((resolve, reject) => {
  let error = randomError();
  if (error)
    reject(`Oh no! ${error}`);
  resolve("Welcome");
});
let to = (input) => {
  return new Promise((resolve, reject) => {
    let error = randomError();
    if (error)
      reject(`Wut? ${error}`);
    resolve(`${input} to`);
  });
};

let paradise = (input) => {
  return new Promise((resolve, reject) => {
    let error = randomError();
    if (error)
      reject(`Srsly? ${error}`);
    resolve(`${input} paradise ☁☁`);
  });
}
welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => {
  console.error(err);
});

// Example outputs:
// Srsly? A random error occured
// Welcome to paradise ☁☁
// Wut? A random error occured
