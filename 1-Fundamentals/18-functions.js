function logger(){
    console.log("My name is Shubham");
}
logger();
logger();
logger();
logger();
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} and ${oranges}`
    return juice;
}
const appleJuice=fruitProcessor(5,0); // we can store return value in variable
console.log(appleJuice)
console.log(fruitProcessor(5,3));
const num=Number('23')  // this will convert string into number