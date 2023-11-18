"use strict";
const PersonProto={
    calcAge(){
        console.log(2023-this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
}

const steven=Object.create(PersonProto);
console.log(steven);
// steven.name='Steven';
// steven.birthYear=2004;
steven.init('shubham',2004)
steven.calcAge();

console.log(steven.__proto__===PersonProto);