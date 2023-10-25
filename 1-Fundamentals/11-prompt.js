const favoirate = Number(prompt("What is your favourite number"));
console.log(favoirate);
console.log(typeof favoirate);
if(favoirate===16){  // this willl also check datatype
    console.log("This is an nice number");
}
else if(favoirate===5){
    console.log("cool number!");
}
else{
    console.log("This is not an nice number");
}
// strict not equal to is recommended as below`
if(favoirate!==16) console.log("Why not 16?");