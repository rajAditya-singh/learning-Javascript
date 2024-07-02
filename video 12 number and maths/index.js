// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(3));  //toFixed is used to have a fix decimal value

// const otherNumber = 123.5456
// console.log(otherNumber.toPrecision(4));  //toprecision is used to give roundoff value starting before decimal

// const hunderds = 10000000
// console.log(hunderds.toLocaleString('en-IN')); //tolocalestring is used to distribute zeros, defalult(amarican)

// -----------------Maths-----------------

// console.log(Math);
// console.log(Math.abs(-2.3)); //used to change only negative value to positive
// console.log(Math.round(3.56));
// console.log(Math.ceil(3.56));
// console.log(Math.floor(3.56));
// console.log(Math.max(3, 4, 5, 6, 7, 8, 9));
// console.log(Math.min(3, 4, 5, 6, 7, 8, 9));

console.log(Math.random()); //values btw 0-1
console.log((Math.random()*10) + 1); //+1 is done for being safe from random values that starts like .0
console.log(Math.round(Math.random()*10)+1);//value bigger than 1
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min); //minimum value 10



