"use strict";
console.log('test data');
setTimeout(()=>console.log('0 sec timer'),0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolved Promise 2').then(res => {
    for(let i=0;i<1000000000;i++){}
    console.log(res)
});
console.log('test end');
// microtasks has priority other than other callBacks