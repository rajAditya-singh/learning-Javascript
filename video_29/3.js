const coding = ["js", "c++", "c", "java", "python"]

// normal function 
// coding.forEach( function(val){
//     console.log(val);
// })

// arrow function
// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);   
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);    
// })

const myCoding = [
    {
        langName : "Javascript",
        langFile : ".js"
    },
    {
        langName : "Java",
        langFile : ".java"
    },
    {
        langName : "Python",
        langFile : ".py"
    }
]

myCoding.forEach((item) => {
    console.log(`${item.langName} = ${item.langFile}`);  
})
