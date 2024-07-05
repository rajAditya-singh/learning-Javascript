let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());

//date is an object on javascript

//How to declare a specific date in javascript
// let myNewdate = new Date(2020, 11, 14) //in javascript month start with 0-11
// console.log(myNewdate.toDateString());
// let myNewdate = new Date(2020, 11, 14, 23, 54) //in javascript month start with 0-11 in Array
// console.log(myNewdate.toLocaleString());
let myNewdate = new Date("03-14-01") //in javascript month start with 1-12 in string
// console.log(myNewdate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(myNewdate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let Newdate = new Date()
console.log(Newdate);
console.log(Newdate.getDay());
console.log(Newdate.getMonth());
console.log(Newdate.getTime());


Newdate.toLocaleString('default', {
    weekday: "long"
})




