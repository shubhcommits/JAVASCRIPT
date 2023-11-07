"use strict";
const oneWord=function(str){
    return str.replaceAll(' ','').toLowerCase();
}
const upperFirstWord=function(str){
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

// HIGHER ORDER FUNCTION
const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!',oneWord);
transformer('Javascript is the best!',upperFirstWord);

const high5=function(){
    console.log('👋');
}
document.body.addEventListener('click',high5);
['shubham','sachin','john'].forEach(high5);