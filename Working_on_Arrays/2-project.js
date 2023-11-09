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

const updateUI=function(currentAccount){
  displayMovements(currentAccount.movements);
}

const displayMovements=function(movements){
  const calcDisplayBalance=function(acnts){
    acnts.balance=movements.reduce((acc,mov)=>acc+mov,0);
    labelBalance.textContent=`${acnts.balance}💲`
  };
    // const balance=movements.reduce((acc,mov)=>acc+mov,0);
  // calcDisplayBalance(account1.movements)
      calcDisplayBalance(currentAccount);
  
  const calcDisplaySummary=function(accnt){
    const incomes=accnt.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
    labelSumIn.textContent=`${incomes}💲`

    const out=accnt.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
    labelSumOut.textContent=`${Math.abs(out)}💲`

    const interest=accnt.movements.filter(mov=> mov>0).map(deposit=>(deposit*accnt.interestRate)/100).filter(intt=>intt>=1).reduce((acc,intt)=>acc+intt,0);
    labelSumInterest.textContent=`${interest}💲`
  }
  // calcDisplaySummary(account1.movements);
  calcDisplaySummary(currentAccount);
    containerMovements.innerHTML='';
    movements.forEach(function(mov,i){
        const type=mov>0?'deposit':'withdrawal';
        const html=`
        <div class="movements__row">
          <div class="movements__type
          movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}💲</div>
          </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin',html);
    })
}
// displayMovements(account1.movements);


// making username
// const createUsername=function(user){
//   const username=user.toLowerCase().split(' ').map(name=>name[0]).join('');
//   return username;
// }
// console.log(createUsername('Shubham Maurya'));

const createUsername=function(accts){
  accts.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  });
};

createUsername(accounts);
console.log(accounts);

// event handling on login button

let currentAccount;

btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  // find return that object where it find that condition
  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){  // using optical chainig // this pin property will only be read if current account exits
    // console.log('LOGIN');
    // Displaying UI and message
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;
  
    // clear input fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();

    // display movements
    // displayMovements(currentAccount.movements);
    updateUI(currentAccount);
    // display balance
        // calcDisplayBalance(currentAccount.movements);
    // calcDisplayBalance(currentAccount.movements);
    // Display Summary
    // calcDisplaySummary(currentAccount.movements);
  }
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  // const receiverAcc=inputTransferTo.value;
  const receiverAcc=accounts.find(acc=> acc.username===inputTransferTo.value);
  // console.log(receiverAcc);
  // console.log(amount);

  inputTransferAmount.value=inputTransferTo.value='';
  inputTransferTo.blur();

  if(amount>0&& receiverAcc&&currentAccount.balance>=amount&&receiverAcc.username!==currentAccount.username){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount>0&&currentAccount.movements.some(mov=> mov>=amount/10)){
    currentAccount.movements.push(amount);
    // updating ui
    updateUI(currentAccount);
    inputCloseUsername.value=inputClosePin.value='';
    inputClosePin.blur();
  }
});

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  // console.log('delete');
  if(inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin){
    const index=accounts.findIndex(acc=> acc.username===currentAccount.username);
    accounts.splice(index,1);
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value='';
  inputClosePin.blur();
});