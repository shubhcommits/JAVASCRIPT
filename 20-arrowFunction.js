// for one line
const calcAge3 = birthYear=>2023-birthYear;
const age3=calcAge3(2004);
console.log(age3);
// for multiple line
const yearRetirement=birthYear=>{
    const age=2023-birthYear;
    const retirement=65-age;
    return retirement;
}
console.log(`Year remaining till retirement is ${yearRetirement(2004)}`)
// passing multiple parameter in arrow function
const yearsUntilRetirement=(birthYear,firstName)=>
{
    const age=2023-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2004,'Shubham'))