"use strict";
const Shubham = {
    firstName: 'Shubham',
    lastName: 'Maurya',
    birthYear: '2004',
    friends: ['rahul','amit','rachit'],
    hasDrivingLicence: true,
    // calcAge: function(birthYear){
    //     return 2023-birthYear;
    // }
    // calcAge: function(birthYear){
    //     return 2023-this.birthYear;  // this is used to used same object member data
    // }
    calcAge: function(birthYear){
        this.age= 2023-this.birthYear;  // here we storing in new property so that we have not to call complete thing repedealy
        return  this.age;
    },
    getSummary: function(){
        if(this.hasDrivingLicence){
            return console.log(`${this.firstName} is ${this.calcAge()} years old programmer, he has a driving licence.`);
        }
        else{
            return console.log(`${this.firstName} is ${this.calcAge()} years old programmer, he does't have a driving licence.`); 
        }
    }
};
// console.log(Shubham.calcAge(2004));
// console.log(Shubham['calcAge'](2004));

console.log(Shubham.calcAge());  // no need to pass parameter as parameter is present in object and this is used

console.log(Shubham.age);  // for this also at once we have to atleast call the function as call at upper side

// challenge 
// write-> Shubham is 19 years old programmer, he has a driving licence.
// if(Shubham.hasDrivingLicence){
//     console.log(`${Shubham.firstName} is ${Shubham.age} years old programmer, he has a driving licence.`);
// }
// else{
//     console.log(`${Shubham.firstName} is ${Shubham.age} years old programmer, he does't have a driving licence.`); 
// }
Shubham.getSummary();