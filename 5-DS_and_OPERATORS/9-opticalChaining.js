"use strict";
const weekdays=['mon','tue','wed','thu','fri','sat','sun'];
"use strict";
const restaurant = {
    nam: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        [weekdays[3]]: {  // at 0 place there is mon
            open: 12,
            close: 22,
        },
        [weekdays[4]]:{
            open: 11,
            close: 23,
        },
        [weekdays[5]]:{
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

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days=['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
    const open=restaurant.openingHours[day]?.open ?? "closed";
    // nullish value are null and undefined
    console.log(`On ${day} we are open at ${open}`)
}

// Methods - optional chaning work on functions
console.log(restaurant?.order?.(0,1)?? "Method does not exist");

// console.log(restaurant.orderPasta?.(1,2,3) ?? "Method does no exist");

// Optional chaining in arrays
const users=[{
    name: 'Shubham',
    email: 'shm.code1@gmail.com',
}];
console.log(users[0]?.name??"user array empty");

// Looping objects
// properties names
const properties=Object.keys(restaurant.openingHours);
console.log(properties);
let openStr=`We are open on ${properties.length} days:`; 
for(const day of properties){
    openStr += `${day}, `;
}
console.log(openStr);

// properties values
const values=Object.values(restaurant.openingHours);
console.log(values);

// Enteries object
const entries=Object.entries(restaurant.openingHours);
for(const [day, {open,close}] of entries){
    console.log(`On day ${day} we are open at ${open} and close at ${close}`)
}