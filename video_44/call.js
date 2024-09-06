function setUserName (userName){
    //complex DB calls
    this.userName = userName
    console.log("called");
}

function createUser(userName, email, isLoggedIn){
    setUserName.call(this, userName)

    this.email = email
    this.isLoggedIn = isLoggedIn
}

const user = new createUser("adi", "adi@gmail.com", true)
console.log(user);


