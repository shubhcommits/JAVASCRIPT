"use strict";
// we can not call the elements of the array by the name we can only call them by index to call all these elements we use objects
const Shubham={
    firstName: 'Shubham',
    lastName: 'Maurya',
    dob: 2023-2004,
    profession: 'programmer',
    friends: ['sachin','anurag','harsh']
}; 
// in objects order does not matter to specify element to access like array
// array should used for more ordered data and object for unordered data

// dot notation
console.log(Shubham.dob)
console.log(Shubham.profession)
// bracket Notation
console.log(Shubham['firstName']);  // in bracket notation we can put expressions inside braces
console.log(Shubham['dob']);
const namekey='Name';
console.log(Shubham['first'+namekey]);

// Dot Vs Bracket
const interestedIN = prompt("What do you want to know about Shubham -> firstName,lastName,dob,profession,friends");
// console.log(Shubham.interestedIN); // this will not work
if(Shubham[interestedIN]){
    console.log(Shubham[interestedIN]);
}
else{
    console.log("Wrong Entry : Choose between firstName,lastName,dob,profession,friends");
}

Shubham.location='Delhi';
Shubham.twitter='@shubhamcommits';
console.log(Shubham);
//challenge
console.log(`${Shubham.firstName} has ${Shubham.friends.length} friends, and his best friend name is ${Shubham.friends[0]}`)