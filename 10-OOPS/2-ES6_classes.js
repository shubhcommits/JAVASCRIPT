"use strict";
class PersonCL{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }
    // all the things outside constructor is inside prototypes of objects not in objects themselves
    // creating prototype of the objects
    calcAge(){
        // return 2023-this.birthYear;
        console.log(2023-this.birthYear);
    }
    greet(){
        console.log(`Hey! ${this.fullName}`);
    }

    static hey(){
        console.log("This is static");
        console.log(this);
    }
    //  set a property that already exits
    set fullName(name){
        console.log(name);
        if(name.includes(' ')){
            this._fullName=name;
        }
        else{
            alert(`${name} is not a full name`);
        }
    }
    get fullName(){
        return this._fullName;
    }
}

const shubham=new PersonCL('shubham maurya',2004);
console.log(shubham);
// console.log(shubham);
// console.log(shubham.calcAge());
shubham.calcAge();
console.log(shubham.__proto__===PersonCL.prototype);

shubham.greet();

// accessors get and set

const account={
    owner: 'shubham',
    movements: [21,322,433,14],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
}
console.log(account.latest); // this using getter and so calling it like property not method
console.log(account.movements.slice(-1).pop());

account.latest=25;
console.log(account.movements);

PersonCL.hey();