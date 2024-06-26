const name = "raj"
const count = 30

// console.log(name + count + "value"); not a good way to practice instead,

// console.log(`My name is ${name} and my count is ${count}`); this is called string interpolation

const gameName = new String('indrmy-new-channel') 

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// // console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

// const newName = gameName.substring(0, 4)  //does not obey negative value
// console.log(newName);
// const othrName = gameName.slice(-8, 4)   //obey negative value
// console.log(othrName);

const newStringone = "    raj    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://raj.com/raj%20singh"
console.log(url.replace('%20', "-"));
console.log(url.includes('aditya'));

console.log(gameName.split('-'));