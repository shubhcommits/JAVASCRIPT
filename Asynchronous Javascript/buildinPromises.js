"use strict";
const lotteryPromise=new Promise(function(resolve,reject){
    console.log('Lottery ticket is happening');
    setTimeout(function(){
        if(Math.random() >=0.5){
            resolve('You win');
        }
        else{
            reject(new Error('You lost your money'));
        }
    },2000);
});

lotteryPromise.then(res=>console.log(res)).catch(err=>console.log(err));

// Promisifying setTimeout
const wait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000);
    })
}
wait(1).then(()=>{
    console.log('I waited for 1 seconds');
    return wait(1);
}).then(()=>{
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(()=>{
    console.log('I waited for 3 seconds');
    return wait(1);
}).then(()=>console.log('I waited for 4 second'));