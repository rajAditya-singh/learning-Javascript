//FOR OF LOOP

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
    // console.log(num);
}

const greetings = "HELLO WORLD";
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
    
}


/*MAP 
known for unique values(no repetions), correct order*/

const map = new Map()
map.set('IN', "INDIA")
map.set('VK', "Virat Kohli")
map.set('MSD', "Ms Dhoni")
map.set('IN', "India")

// console.log(map);

for (const [key, values] of map) {
    console.log(key, ":-", values);
}


/*const myObject = {
    'game1': 'NFS',
    'game2':'IGI'
}
for (const [key, values] of myObject) {
    console.log(key, "=", values);
}  
As we can see that the OBJECT is not iterable through forOf loop we need to use some other process for object iteration*/

