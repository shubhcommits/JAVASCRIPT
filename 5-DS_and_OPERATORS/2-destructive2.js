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
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    // orderDelivery: function(obj){
    //     console.log(obj);
    // },
    orderDelivery: function({starterIndex=1,mainIndex=0,time="20:00",address,}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};
// restaurant.orderDelivery({
//     time:'12:25',
//     address: "shm anj",
//     mainIndex: 2,
//     starterIndex: 2,
// });
restaurant.orderDelivery({
    address: "shubhah",
    starterIndex: 1,
});
// In objects order of elements does not matter
const {nam,openingHours,categories}=restaurant;  // here name openingHours and categories are variables but the name of variables same as object from here we calling
console.log(nam,openingHours,categories);
// To give new variabble name
const {
    nam:restaurantName,  // making different variable names
    openingHours:hours,
    categories:tags,
}=restaurant;
console.log(restaurantName,hours,tags);

const {menu=[],starterMenu:starter=[]}=restaurant; // making default values [] and renaming starterMenu as starter
console.log(menu,starter);

// MUTATING VARIABLES
let a=555;
let b=346;
const obj={a:12,b:6,c:88};
({a,b}=obj);
console.log(a,b);

//Nested Objects
// const {
//     thu
// }=openingHours;
// console.log(thu);
const {
    thu:{open:o,close:c},
}=openingHours;
console.log(o,c);