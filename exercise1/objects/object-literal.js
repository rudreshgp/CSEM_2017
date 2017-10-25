// Object-literal style object creation

var cat = {
  meow: 'meowww',
  speak: function () {
    return this.meow;
  },
};

var loudCat = Object.create(cat);
loudCat.loud = true;
loudCat.shout = function () {
  return this.meow.toUpperCase() + '!!';
};

loudCat.speak = function () {
  if (this.loud) {
    return this.shout();
  } else {
    return this.meow;
  }
};

console.log(loudCat.speak());
loudCat.loud = false;
console.log(loudCat.speak());
