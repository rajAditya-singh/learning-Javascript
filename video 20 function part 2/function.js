function CalculateCartPrice(val1, val2, val3, ...num1) {
    return num1
}
// console.log(CalculateCartPrice(200, 100, 200, 400, 500, 300));

const user = {
    username : "Raj",
    Price: 200
}

function handleObject (anyobject){
    console.log(`user name is ${anyobject.username}, and price is ${anyobject.Price} `);
}
// handleObject(user)
// handleObject({
//     username:"Aditya",
//     Price:500
// })

const myNewArray = [200, 300, 400, 500]

function ReturnSecondArray (anyarray){
    return anyarray[1]
}

// console.log(ReturnSecondArray(myNewArray));
console.log(ReturnSecondArray([200, 300, 400, 500]));