// spread operator is used to seprating all elements of array into individuals
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

// want to add element in array by creating new Array
const arr=[5,6,7];  // original array
const badArr=[1,2,5,6,7]; // bad method of using
console.log(badArr);

// spreadMethod
const newArr=[1,2,...arr];
console.log(newArr);

// if we want individulal elements of newArr
console.log(...newArr);  // it will spread the elements of the array

const newMenu=[...restaurant.mainMenu,'milk'];
console.log(newMenu);
// spread operators only used where commas are used

// copy array
const mainMenuCopy=[...restaurant.mainMenu];
// join two arrays
const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

// Itrables - most of the build in datastructure in javascript are itrables except objects
const str="Shubham";
const letters=[...str," ","A."];
console.log(letters);
console.log(...str);

// const ingridients=[prompt('Let\'s make pasta! ingredients1'),prompt('ingredients2'),prompt('ingredients3')];
// console.log(ingridients);
// restaurant.orderPasta(ingridients[0],ingridients[1],ingridients[2]);
// // upper can be written as
// restaurant.orderPasta(...ingridients);  //ES6

// const newRestaurent={foundedIn:1993,...restaurant,founder:'anuj'}
// console.log(newRestaurent)

const restaurantCopy={...restaurant};
restaurantCopy.nam='foodclassy';
console.log(restaurantCopy.nam);
console.log(restaurant.nam);

// SPREAD
const arr2=[1,2,...[3,4]];  // this is spread unpack array
console.log(arr2);

// REST
const [a,b,...others]=[1,2,3,4,5];  // here uses rest elements another than a,b all others are packed in others
console.log(a,b,others);

const [pizza, ,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
// taking elements fromthe mainmenu and startermenu and storing in pizza,resotto and and otherFood
// rest elements contains all the others elements after the last elements
console.log(pizza,risotto,otherFood);

// rest in objects
const {sat,...weekdays}=restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// FUNCTION IN REST
const add=function(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
}
add(2,3,5,5);
add(3,5,4,3,2,3,4,5);
const x=[6,7,3,5,3];
add(...x);  // using spread

restaurant.orderPizza('onion','tomato','sauce','olives');
restaurant.orderPizza('carrot');