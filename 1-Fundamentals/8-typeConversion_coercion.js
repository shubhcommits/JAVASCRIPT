// Type conversion
const inputYear="1991";
console.log(Number(inputYear),inputYear);
console.log(inputYear+15);  // this will only concatinate not add
console.log(Number(inputYear)+12);  // this will add as this first string type converted to number by Number(inputYear) then it added
// string is converted only where where Number(inputYear) is used but it still string everyehere other
console.log(String(23));  // to convert number to string

// Type coercion
console.log("I am "+19+" years old");  // 19 is automatically converted number to string this is called type coercion
console.log("22"-"4"-3);  // here (-) automatically convert string into number
console.log("22"+"4"+3);  // it convert 3 to string then concatenate
console.log("22"*"2");
console.log("22"/"2");  // In both multiplication,division and substraction it automatically converted string to the number
