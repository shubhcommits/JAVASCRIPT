// spread operator is used to seprating all elements of array into individuals
"use strict";
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
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