"use strict";
const restaurant = {
    nam: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
};

// Map
const rest =new Map();
rest.set('name','Classio Italino');
rest.set(1,'Mumbai');
rest.set(2,'Delhi');
console.log(rest);

rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true,'We are open').set(false,'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time=14;
console.log(rest.get(time>rest.get('open')&& time<rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr=[1,2];
rest.set(arr,'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'),'Heading');

// Second method of adding elements to the map
const question = new Map([
    ['question','What is your best programming language'],
    [1,"C++"],
    [2,"Java"],
    [3,"C"],
    ['correct',1],
    [true,'Correct'],
    [false,'Try again!'],
])
console.log(question);

// converting object to map
const hoursMap=new Map(Object.entries(restaurant.openingHours))

console.log(hoursMap);

console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer=Number(prompt("Your Answer"))
console.log(answer);

if(answer===3){
console.log(question.get(true));
}
else{
    console.log(question.get(false));
}