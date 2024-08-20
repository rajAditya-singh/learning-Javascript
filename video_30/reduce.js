const myNums = [1, 2, 3, 4]

// const Sum= myNums.reduce( function (acc, curval) {
//     console.log(`${acc} + ${curval}`);
//     return acc + curval
// }, 1)

// const Sum = myNums.reduce( (acc, curval)=> {
//     console.log(`${acc} + ${curval}`);
//     return acc + curval
// }, 1)

// console.log(Sum);

const shoppingcart = [
    {
        itemname : "Js Cource",
        price : 2999
    },
    {
        itemname : "Python Cource",
        price : 999
    },
    {
        itemname : "C++ Cource",
        price : 1999
    },
    {
        itemname : "Java Cource",
        price : 3999
    },
    {
        itemname : ".net Cource",
        price : 99
    }
]

const sum = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(sum);


