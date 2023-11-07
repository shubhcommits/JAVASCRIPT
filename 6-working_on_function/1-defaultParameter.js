"use strict";
const bookings=[];
const createBooking=function(flightNum,numsPassengers=1,price=199*numsPassengers){
    const booking={
        flightNum,
        numsPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',undefined,1000);