'use strict';
// Data
const account1 = {
  owner: 'Shubham Maurya',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr=['a','e','i','o','u'];

// SLICE  -> This does not change array but make a copy of it
console.log(arr.slice);
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE  -> This remove element and mutate the original array
arr.splice(-1);
console.log(arr);
arr.splice(1,2); // Here 1 is index and 2 is the number of elements from here
console.log(arr);

// REVERSE  -> This reverse and mutate the original array
arr=['a','b','c','d'];
const arr2=['s','d','d','d'];
console.log(arr.reverse());
console.log(arr);  // the original array mutated bbty reversing this

// CONCAT  -> This cocat and does not mutate the original array
const letters=arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

// JOIN
console.log(letters.join('-'));



/*
// ALT METHOD
const arr=[23,55,65];
console.log(arr[0]);
console.log(arr.at(0));
// getting last array element
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('shubham'.at(0));

*/

// FOR EACH LOOP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements){
  for(const [i,movement] of movements.entries()){
  if(movement>0){
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  }
  else{
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('----ForEach-------');
// movements.forEach(function(movement){
//   if(movement>0){
//     console.log(`You deposited ${movement}`);
//   }
//   else{
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// })
movements.forEach(function(movement,i,arr){
  if(movement>0){
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  }
  else{
    console.log(`Movement ${i+1}: You withdraw ${Math.abs(movement)}`);
  }
})
// continue and break statement do not work on for each loop

// FOR EACH ON MAP

const currencie=new Map([
  ['USD','United States Doller'],
  ['EUR','Euro'],
  ['GBP','Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
})

// Set
const currencieUnique=new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currencieUnique);
currencieUnique.forEach(function(value,_,map){
  console.log(`${value}: ${value}`);
})



///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const checkDogs=function(dogsJulia,dogsKate){
    const juliaCorrected=dogsJulia.slice();
    juliaCorrected.splice(0,1);
    juliaCorrected.splice(-2);
    // dogsJulia.slice(1,3);
    const dogs=juliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function(dog,i){
        if(dog>=3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        }
        else{
            console.log(`Dog number ${i+1} is still a puppy 🐶`);
        }
    })
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);



"use strict";
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// map  -> This puts it into a new Array with new elements
const eurToUsd=1.1;
// const movementsToUsd=movements.map(function(mov){
//     return mov*1.1;
// })
// applying upper line using arrow function
const movementsToUsd=movements.map(mov => mov*eurToUsd);
console.log(movements);
console.log(movementsToUsd);

// movementsUsd using for but map is the modern way of using

const movementsUSDfor=[];
for(const mov of movements){
    movementsUSDfor.push(mov*eurToUsd);
}
console.log(movementsUSDfor);


const movementDescr = movements.map((mov,i)=>
    `Movement ${i+1}: You ${mov>0?'deposited':'withdraw'} ${Math.abs(mov)}`
);
console.log(movementDescr);


// FILTER METHOD  -> this work for what the certain condition is true this stores the values into array

// These call back function can also access index and array along swith the elements
const deposits=movements.filter(function(mov){
    return mov>0;
})
console.log(movements);
console.log(deposits);

const withdrawal=movements.filter(mov => mov<0);
console.log(withdrawal);


// REDUCE
const balance=movements.reduce(function(acc,cur,i,arr){
    return acc+cur;
},0);
console.log(balance);
// maximum value by reduce
const max =movements.reduce((acc,mov)=>{
    if(acc>mov) return acc;
    else return mov;
},movements[0]);
console.log(max);

// chaining Method
const totalDepositsUSD=movements.filter(mov => mov>0).map(mov => mov*eurToUsd).reduce((acc,mov)=> acc+mov,0);

console.log(totalDepositsUSD);


"use strict";
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge=function(ages){
    const humanAges=ages.map(age=>(age<=2?2*age:16+age*4));
    const adults=humanAges.filter(age=> age>=18);
    console.log(humanAges);
    console.log(adults);
    const avg=adults.reduce((acc,age)=>acc+age,0)/adults.length;
    return avg;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));




// FIND METHOD  -> This method returns first element of condition no in array

const firstWithdrawal=movements.find(mov =>mov<0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account =accounts.find(acc=>acc.owner==='Shubham Maurya');
console.log(account);


// Some And every
console.log(movements);

// includes used for exact value to check
console.log(movements.includes(70));

// some is used to check for some CONDITIONS

const anyDeposots=movements.some(mov =>mov>50000);  // if there is any value for which the conditions is true then it returns true
console.log(anyDeposots);

// EVERY

console.log(movements.every(mov=>mov>0));
console.log(account4.movements.every(mov=>mov>0));

// Seperate call back function

const deposit=mov=> mov>0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
// this is useful to folllow dry principle

// flat() method
const arr3=[[1,2,3],[4,5,6],7,8];
console.log(arr3.flat());  // this go one deep without defining inside how much deep to go

const arrDeep=[[1,2],3,[4,[5,6]],7,8];
console.log(arrDeep.flat(2));  // this goes deep how much we defined like there we have defined deep till 2 array