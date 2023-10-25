"use strict";
// for(let i=1;i<=10;i++){
//     console.log(`Push up ${i} times`);
// }

const shubham = [
    'shubham',
    'maurya',
    2023-2004,
    'programmer',
    ['sachin,anuj,aniket'],
    true
];
const types=[];
for(let i=0;i<shubham.length;i++){
    console.log(shubham[i],typeof shubham[i]);
    // filling elements
    // types[i]=typeof shubham[i];
    types.push(typeof shubham[i]);
}
console.log(types)

const years=[1925,2015,2002,2006,1958];
const age=[];
for(let i=0;i<years.length;i++){
    age.push(2023-years[i]);
}
console.log(age)

// continue
console.log('----continue if not a string--------')
for(let i=0;i<shubham.length;i++){
    if(typeof shubham[i]!=='string'){continue;}
    console.log(shubham[i],typeof shubham[i]);
    types.push(typeof shubham[i]);
}

// break
console.log('------break when number comes------')
for(let i=0;i<shubham.length;i++){
    if(typeof shubham[i]==='number'){break;}
    console.log(shubham[i],typeof shubham[i]);
    types.push(typeof shubham[i]);
}