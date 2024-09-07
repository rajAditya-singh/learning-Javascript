class user{
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addBooks(){
        console.log(`A new book has been added by ${this.username}`);
    }
}

const adi = new Teacher("adi", "adi@gmail.com", "123")
adi.addBooks();
const aditya = new user("Aditya")
aditya.logMe()
adi.logMe();

console.log(adi === aditya);
console.log(adi === Teacher);
console.log(aditya instanceof user);


