"use strict";
const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greetHey=greet('Hey');
greetHey('shubham');
// upper two line can be written as
greet('Hey')('JOY');

// upper function using arrow function
const greetArry=greeting=>name=>console.log(`${greeting} ${name}`);
greetArry('Hi')('Shubham');

// CALL AND APPLY METHODS
const lufthansa={
    airline: 'Lufthanasa',
    iatacode: 'LH',
    bookings: [],
    book(flightNum,name){
        console.log(`${name} booked seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
    this.bookings.push({flight: `${this.iatacode}${flightNum}`,name});
    }
}

lufthansa.book(235,'Shubham Maurya');
lufthansa.book(35,'John');
console.log(lufthansa);

const eurowiings={
    airline:'Eurowings',
    iatacode: 'EW',
    bookings: [],
};

const book=lufthansa.book;

// book(54,'Kane Williumson');  // This does not work
book.call(eurowiings,54,'kane Williumson');
console.log(eurowiings);

book.call(lufthansa,415,'shubham maurya')
console.log(lufthansa);

const swiss={
    airline:'Swiss Airline',
    iatacode: 'LX',
    bookings: [],
};

book.call(swiss,56,'sam karan');
console.log(swiss);

// Apply method
const flightData=[152,'george'];
// book.apply(swiss,flightData);
// this can be written in more modern ways
book.call(swiss,...flightData);
console.log(swiss);