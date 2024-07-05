// () - parentheses 
// {} - brackets
// [] - Braces

// -----------------Array-----------------
const myArr =[0, 1, 2, 3, 4, 5]     
const myArr2 = new Array(12, 23, 4,5)



// Array Methods
//to add or remove items in last on an array
// myArr.push(8)
// myArr.pop()

//to add or remove items in starting of a array 
// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.includes(2));

// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(20));
// console.log(myArr);

// const newArr = myArr.join()//to convert array into strings
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A", myArr);

const myna1 = myArr.slice(1, 3)
console.log(myna1);

console.log("B", myArr);

const myna2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myna2);