"use strict";
const weekdays=['mon','tue','wed','thu','fri','sat','sun'];
const openingHours={
    // thu: {
    //     open: 12,
    //     close: 22,
    // },
    // upper can be written as
    [weekdays[0]]: {  // at 0 place there is mon
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
    [`day-${4+2}`]: {
        open: 16,
        close: 36,
    }
};

const restaurant = {
    nam: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    // orderDelivery: function({starterIndex=1,mainIndex=0,time="20:00",address,}){
    //     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    // },
    // upper function can be written as
    orderDelivery({starterIndex=1,mainIndex=0,time="20:00",address,}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1,ing2,ing3){
        console.log(`Here is delicious pasta with ${ing1},${ing2},${ing3}`);
    },
    orderPizza(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};