// () - parentheses 
// {} - brackets
// [] - Braces

// -----------------Array-----------------
// const myArr =[0, 1, 2, 3, 4, 5]     
// const myArr2 = new Array(12, 23, 4,5)



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

// console.log("A", myArr);

// const myna1 = myArr.slice(1, 3)
// console.log(myna1);

// console.log("B", myArr);

// const myna2 = myArr.splice(1, 3)
// console.log("c", myArr);
// console.log(myna2);


// -------------Array P2--------------
const marvel_heros = ["thor", "ironman", "spiderman"] 
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

// const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const another_arr = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10], 11], 12]
const one_arr = another_arr.flat(Infinity)
console.log(one_arr);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya")); // from is used to convert into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));