fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce)=>{
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=>{
    console.log(error);  
})
