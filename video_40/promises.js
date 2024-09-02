// const promiseOne = new Promise(function(resolve, reject){
//     // Do an Async task
//     // DB calls, Cryptography, Network.
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise (function(resolve, reject){
//     setTimeout(function () {
//         console.log('Async task 2');
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('Promise is consumed');
    
// })

const promiseThree = new Promise (function(resolve, reject){
setTimeout(function(){
resolve({username : "chai", email : "adi@gmail.com"})
}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise (function (resolve, reject) {
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username:"raj", password: "123"})
        }
        else{
            reject('Error: something went worng')
        }
        
    }, 1000)
})
promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> {console.log("The Promise Is either reject or resolve")}
);