// PASSING ARGUMENTS VALUE VS REFERENCE
"use strict";
const flight='LH234';
const shubham={
    name: 'Shubham',
    passport: 25253625,
}

const checkIn=function(flightNum,passenger){
    flightNum='BH2553';
    passenger.name='Mr. '+passenger.name;
    if(passenger.passport===25253625){
        alert('Check In');
    }
    else{
        alert('Wrong Passport');
    }
};

checkIn(flight,shubham);
console.log(flight);  // flight name does't change as the name was passed a copy of it at the original was not mutated
console.log(shubham);  // here shubham is a object at it got mutated

const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*1000000);
};
newPassport(shubham);
checkIn(flight,shubham);