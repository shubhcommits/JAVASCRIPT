"use strict";
const airline ='TAP Air Portugal';
const plane='A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('B45D5'[0]);

console.log(airline.length);
console.log('sjdfb'.length);

// String Methods

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));  // start printing from index 4
console.log(airline.slice(4,7));  // start printing from index 4 and stop before 7

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const middleSeat=function(seat){
    // supposing that middle seats are B and E
    const s=seat.slice(-1);
    if(s==='B'||s==='E'){
        console.log('You got the middle seat🙂');
    }
    else{
        console.log('You got corner seat 😃');
    }
}

middleSeat('11B');
middleSeat('22C');
middleSeat('22E');

console.log(airline.toLowerCase());
console.log(airline.toLocaleUpperCase());
console.log(airline);  // original is not mutated but new string printed with string methods

// Fix Capatilisation
const passenger='sHuBhaM';
const passsengerLower=passenger.toLowerCase();
const paassengerCorrect=passenger[0].toUpperCase()+passsengerLower.slice(1);
console.log(paassengerCorrect);

// Comparing email
const email='shm.code1@gmail.com';
const loginemail='   ShM.CodE1@gmail.com   \n';

// const loweremail=loginemail.toLowerCase();
// const trimmedemail=loweremail.trim();
// console.log(trimmedemail);
// upper 3 line can be done as
const normalised=loginemail.toLowerCase().trim();
console.log(normalised);

const check=function(correctEmail,inputEmail){
    if(correctEmail===inputEmail){
        return true;
    }
    return false;
}
console.log(check(email,loginemail));
console.log(check(email,normalised));

// replacing
const priceGB='253,25&';
const priceUS=priceGB.replace('&','$').replace(',','.');
console.log(priceUS);

const annoucement='All passenger come to boarding door 23. Boarding door 23!';
console.log(annoucement.replace('door','gate'));
console.log(annoucement.replaceAll('door','gate')); // this replace every where the string exits
console.log(annoucement.replace(/door/g,'gate'));

//Booleans
const plane1='Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boing'));
console.log(plane1.includes('Air'));
if(plane1.startsWith('Airbus')&&plane1.endsWith('neo')){
    console.log('Part of the new Airbus family');
}

// practice
const checkBaggage=function(items){
    const baggage=items.toLowerCase();
    if(baggage.includes('knife')||baggage.includes('gun')){
        console.log('You are not allowed on board');
    }
    else{
        console.log('Welcome on board!');
    }
}

checkBaggage('I have laptop,some food and a gUn');
checkBaggage('I have clothes and an camera');

// USE OF slit() and join
// split will split and stores it into a array
console.log('a+very+nice+string'.split('+'));
console.log('Shubham Maurya'.split(' '));

const [firstName,lastName]='Shubham Maurya'.split(' ');
const newName=['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capatilisation=function(name){
    const names=name.split(' ');
    const nameUpper=[];
    for(const n of names){
        // nameUpper.push(n[0].toUpperCase()+n.slice(1));
        nameUpper.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(nameUpper.join(' '));
}
capatilisation('somthing to do amazingly');

// Padding a string
const message='Go to gate 3!';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Shubham'.padStart(20,'+').padEnd(30,'+'));

//MASKING
const maskCreaditCard=function(number){
    const str=number+ '';
    const last=str.slice(-4);
    return last.padStart(str.length,'*');
}
console.log(maskCreaditCard(2546783625));
console.log(maskCreaditCard(221133));

// REPEAT METHOD
const message2='Bad weather... Departure Delayed... ';
console.log(message2.repeat(4));

const planeInLine=function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planeInLine(5);
planeInLine(2);