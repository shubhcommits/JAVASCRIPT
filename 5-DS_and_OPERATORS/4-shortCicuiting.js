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
    orderDelivery: function({starterIndex=1,mainIndex=0,time="20:00",address,}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function(ing1,ing2,ing3){
        console.log(`Here is delicious pasta with ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};


// use of or other than boolean
// or operator return the value which is not falsy checking from left to right
console.log("-----OR------");
// restaurant.numGuests=30;  // if this is 0 then not correctly work
const guests1=restaurant.numGuests?restaurant.numGuests:10;
console.log(guests1);
// upper can be written as
const guest2=restaurant.numGuests||10;
console.log(guest2);

console.log("----AND----")
console.log(0&&"Shubham");  // it resturns the falsy value if exits before true value else return true value
console.log(8 && 'shubham');
if(restaurant.orderPizza){
    restaurant.orderPizza('mushroom','spinch');
}
// upper can be written as
restaurant.orderPizza&&restaurant.orderPizza('mushroom','spinch');

restaurant.numGuests=0;
const guests= restaurant.numGuests||10;
console.log(guests);
// correcting upper
// nullish value: ?? 0 and ' ' are not false for it
const guestCorrect=restaurant.numGuests??10;
console.log(guestCorrect);