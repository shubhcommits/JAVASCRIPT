const marksWeigth=78;
// const marksWeigth=95;
const marksHeigth=1.69;
// const marksHeigth=1.88;
const johnWeigth=92;
// const johnWeigth=95;
const johnHeight=1.95;
// const johnHeight=1.76;
const johnBMI=johnWeigth/(johnHeight**2);
const marksBMI=marksWeigth/(marksHeigth**2);
const markHigherBMI=marksBMI>johnBMI;
console.log(markHigherBMI);