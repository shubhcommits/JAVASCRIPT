// five falsy values -> 0,"",undefined,null,NaN
console.log(Boolean(0));  // RESULTS FALSE
console.log(Boolean(undefined));  // RESULTS FALSE
console.log(Boolean(""));  // RESULTS FALSE
console.log(Boolean(null));  // RESULTS FALSE
console.log(Boolean(NaN));  // RESULTS FALSE
console.log(Boolean({}));  // RESULTS true this is not falsy value

// const money=0;  // zero is falsy value
const money=100;
if(money){
    console.log("You can spend it");
}
else{
    console.log("you should earn money");
}

// let height;  // undefined is falsy value
let height=0; // zero is also falsy value
if(height){
    console.log("height is defined")
}
else{
    console.log("height is undefined");
}