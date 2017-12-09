// TODO: Re-implement flight.js using ES2015
'use strict'
class MarsFlight {
    constructor(outbounddate, speed) {
        this.speed = speed || 1;
        this.outbounddate = outbounddate || 'February 19, 2017';
        this.originplace = 'Earth';
        this.destinationplace = 'Mars';
    }
    duration() {
        return (63070000000 / this.speed);
    }
    durationInDays() {
        return Math.round(this.duration() / (1000 * 60 * 60 * 24));
    }
    getInboundDate() {
        return new Date(Date.parse(this.outbounddate) + this.duration());
    }
}

class FastMarsFlight extends MarsFlight {
    constructor(outbounddate) {
        super(outbounddate, 3);
    }
}
let plannedDeparture = 'February 20, 2017';
let marsFlight = new MarsFlight(plannedDeparture);
let fastMarsFlight = new FastMarsFlight(plannedDeparture);

console.log(`The RyanAir Mars flight will take ca. ${marsFlight.durationInDays()} days (ETA: ${marsFlight.getInboundDate()}).`);

console.log(`Maybe we should upgrade to Elon Emirates and fly there in ${fastMarsFlight.durationInDays()} days.`);
