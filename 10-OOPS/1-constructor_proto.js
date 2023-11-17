"use strict";

const Person=function(firstName,birthYear){
// console.log(this);
// instance properties
this.firstName=firstName;
this.birthYear=birthYear;

// Don't do lower three line code

// this.calcAge=function(){
//     console.log(2037-this.birthYear);
// }

};

// 1. new empty object is created {}
// 2. function is called this={}
// 3. this linked to the prototype
// 4. function automatically return {}

const shubham=new Person('Shubham',2004);
console.log(shubham);
const matidia=new Person('Matidia',2002);
console.log(matidia);
console.log(shubham instanceof Person);  // yes as shubham is instance of Person

Person.hey=function(){  // here hey is not a prototype of person
    console.log('Hey there observing static method');
}
Person.hey();
// shubham.hey();  // this will show error as this is not a prototype 
// here hey is set to the constructor hey not to the prototype
 
// PROTOTYPES
Person.prototype.calcAge=function(){
    console.log(2023-this.birthYear);
}
// Person.prototype if the prototype of the objects not the person
shubham.calcAge();
matidia.calcAge();

console.log(shubham.__proto__);
console.log(shubham.__proto__===Person.prototype);  // Person.prototype is prototype of objects

console.log(Person.prototype.isPrototypeOf(shubham)); // true
console.log(Person.prototype.isPrototypeOf(Person));  // false

// adding properties to the objects other than methods
Person.prototype.species='Homo Sapiens';
console.log(shubham.species);  //-> Homo Sapiens

console.log(shubham.hasOwnProperty('firstName'));
console.log(shubham.hasOwnProperty('species')); //-> false   as this property not really inside the objects it simply has access to it

console.log(shubham.__proto__);
console.log(shubham.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr=[1,5,3,6,1,3];
console.log(arr.__proto__);
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__);

// making our own method  // we can call this methofd ion any array we can want
Array.prototype.unique=function(){
    return [...new Set(this)];
};
console.log(arr.unique());

const h1=document.querySelector('h1');
console.dir(h1);
// console.dir(x=>x+1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const car=function(make,speed){
    this.make=make;
    this.speed=speed;
}
// console.log(new car('makeByShubham',45));
const bmw=new car('BMW',120);
const Mercedes=new car('Mercedes',95);
console.log(bmw);
console.log(Mercedes);

car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

car.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

bmw.accelerate(); 
bmw.accelerate();
bmw.accelerate();

bmw.brake();
bmw.brake();
bmw.brake();

Mercedes.brake();
Mercedes.brake();