"use strict";
const arr=[1,2,6];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x,y,z]=arr;  // destructuring
console.log(x,y,z);
console.log(arr);

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
// let [main,secondary]=restaurant.categories;
// console.log(main,secondary);
// if want to print third element of categories in second variable
let [main, ,secondary]=restaurant.categories; // skipped the element in middle
console.log(main,secondary);

// switching the element
const temp=main;
main=secondary;
secondary=main;

// MUTATING VARIABLES
[main,secondary]=[secondary,main];  // Destructuring
console.log(main,secondary);

// receiving two return value from a function
console.log(restaurant.order(2,0));

const [starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);

// nested destructuring
const nested = [2,4,[3,6]];
// const [i, ,j]=nested;
// console.log(i,j);

const [i, ,[j,k]]=nested;
console.log(i,j,k);

// Default values
const [p=1,q=1,r=1]=[8,6];
console.log(p,q,r);  // in place of r default value will printed