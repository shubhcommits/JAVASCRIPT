"use strict";
const rest1={
    name: 'capri',
    // numGuests:20,
    numGuests:0,
};
const rest2={
    name: 'la Pizza',
    owner: 'Shubham',
}
// OR ASSIGNMENT OPERATOR
// rest1.numGuests=rest1.numGuests||10;
// rest2.numGuests=rest2.numGuests||10;

// rest1.numGuests ||=10;
// rest2.numGuests ||=10;

// NULLISH ASSIGNMENT OPERATOR

rest1.numGuests ??=10;
rest2.numGuests ??=10;

// AND ASSIGNMENT OPERAOTR
rest1.owner &&='<ANONYMOUS>';
rest2.owner &&='<ANONYMOUS>';  // && operator return first falsy value else return true if not get any falsy value

console.log(rest1);
console.log(rest2);
