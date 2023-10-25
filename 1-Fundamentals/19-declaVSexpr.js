// function declaration
'use strict';
function calcAge1(birthYear){
    return 2023-birthYear;
}
const age1=calcAge1(2004)
console.log(age1);
// function exppression
const calcAge2=function(birthYear){
    return 2023-birthYear;
}
const age2=calcAge2(2004);
console.log(age1,age2);