// function getMilk(money){
//     console.log("move left");
//     console.log("move right");
//     var bottles=Math.floor(money*1.5);
//     console.log("no of bottles of milk we can get in this money  is "+bottles);
//     return money%1.5;
// }
// var change=getMilk(4);
// console.log(change)
function getMilk(money){
    console.log("move left");
    console.log("move right")
    console.log("no of bottles are "+noOfBottles(money,1.5));
    return change(money,costPerBottles);
}
function noOfBottles(money,costPerBottles){
    return Math.floor(money/costPerBottles);
}
function change(money,costPerBottles){
    return money%costPerBottles;
}
console.log(getMilk(5));
