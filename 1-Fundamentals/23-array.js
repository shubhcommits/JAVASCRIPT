"use strict";
const friend1='mohit';
const friend2='adarsh';
const friend3='harsh';
const friends=['mohit','adarsh','raj'];
console.log(friends);

const years=new Array(2023,2025,2075);
console.log(friends[0]);
console.log(years[2]);
console.log(friends.length);  // to get length of array
console.log(friends[friends.length-1]);
friends[2]='Sachin';  // mutating array as array is not primitive value so const can be mutatable
console.log(friends[2]);
console.log(friends);
// friends=['bob','asish']; // we can not mutate comlete array as it declared by const

// array can store different values datatypes
const firstName='Shubham';
const shubham=[firstName,'Maurya',2023-2004,friends];
console.log(shubham);
console.log(shubham[2]);

function calcAge(birthyear){
    return 2023-birthyear;
}
const year=[2004,2005,2006,2007];
// console.log(calcAge(year));  // this is wrong
console.log(calcAge(year[0])); // we can pass individual element like this
console.log(calcAge(year[1]));
console.log(calcAge(year[2]));
console.log(calcAge(year[year.length-1]));1

const ages=[calcAge(year[0]),calcAge(year[1]),calcAge(year[2]),calcAge(year[year.length-1])];
console.log(ages);
console.log(ages[0]);