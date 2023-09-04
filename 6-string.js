const myName="John";
const job="programmer";
const birthYear=2004;
const year=2023;
// const john= "I'm "+ myName+" , "+(year-birthYear)+" years old "+job+" !";
// In ES6
// Template string
const johnNew=`I'm ${myName} , ${year-birthYear} years old ${job}!`;
console.log(`Just a regular string `)
console.log(johnNew);
// for string in multiple lines
// console.log("string with \n\multiple \n\lines");
//In ES6 for string in multiple lines
console.log(`string with
multiple
line`)