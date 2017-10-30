const events = require('events');

let em = new events.EventEmitter();
let bookings = [];

function performBooking(newBooking) {
  bookings.push(newBooking);
}

// TODO: Attach an event handler (callback)
// that listens for 'booking' events.


// standard input and output streams also
// use events
process.stdin.on('readable', () => {
  let input = process.stdin.read();
  if (input !== null) {
    let tInput = input.toString().trim();

    if (tInput === 'show') {
      console.log('Bookings: ', bookings);
    } else if (tInput === 'exit') {
      process.exit(0);
    } else {
      // TODO: emit a new event
    }
  }
});
