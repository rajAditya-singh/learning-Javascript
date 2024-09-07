class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const adi = new user("adi")
// console.log(adi.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const aditya = new Teacher("aditya", "adii@gmail.com")
aditya.logMe();
console.log(aditya.createId())
