//FORIN loop

//Objects
const myObject = {
    js :'Javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

//Array
const prog = ["js", "rb", "py", "c++", "java"]

for (const key in prog) {
    // console.log(key);
    // console.log(`${key} for ${prog[key]}`);
}

// Map
/*const map = new Map()
map.set('IN', "INDIA")
map.set('VK', "Virat Kohli")
map.set('MSD', "Ms Dhoni")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
we cannot perform itration on map this way*/

