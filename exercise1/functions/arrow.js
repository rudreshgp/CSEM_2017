// The output of listHotels() should be:
// Vulcan Inn Mars
// Vulcan Inn Jupiter

// The current implementation is buggy.
// Please rewrite the code using ES2015 syntax
// to fix the issue.

'use strict'
var hotelChain = {
  _name: 'Vulcan Inn',
  _hotels: [{ location: 'Mars' }, { location: 'Jupiter' }],
  listHotels() {
    this._hotels.forEach((h) => { console.log(this._name + ' ' + h.location) }, this)
  },
};

hotelChain.listHotels();

// undefined Mars
// undefined Jupiter
