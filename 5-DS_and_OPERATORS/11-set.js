"use strict";
const orderSet=new Set(["Pizza","pasta","pasta","Pizza","Burger"]);
console.log(orderSet)

console.log(new Set('Jonas'));
console.log(orderSet.size);

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("bread"));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Pizza');
console.log(orderSet);
orderSet.clear()  // this is used to delete all the elements of the set

// for(const order of orderSet) console.log(order);

const staff=['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique=new Set(staff)
// console.log(staffUnique);
const staffUnique=[...new Set(staff)];
console.log(staffUnique);
for(const unique of staffUnique){
    console.log(unique);
}

console.log(new Set('Shubham').size);