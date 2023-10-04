"use strict";
const friends=['Saurabh','Kanisk','Aaditya'];
// .push(Argument)
friends.push('Aanand');  // push is used to assign new value at the end of the array
const newLength=friends.push('anuj');  // as push dunctio returns the length of the array we can store it into a variable
console.log(friends)
console.log(newLength)
// .unshift(Argument)
friends.unshift('john');
console.log(friends);
// .pop();
friends.pop();  // remove element from last
const popped=friends.pop();  // this function return removed element from the array
console.log(popped);
console.log(friends);
// .shift()
friends.shift();  // remove elements from the begining
console.log(friends);
// .indexOf(element)
const index=friends.indexOf('Kanisk'); // this will return the index of element we pass in it
console.log(index);
// .includes(Argument)
const find=friends.includes('Saurabh');  // this function return true if element found else return false
console.log(find);
console.log(friends.includes(23));
if(friends.includes('Saurabh')){
    console.log("You have a friend Saurabh");
}