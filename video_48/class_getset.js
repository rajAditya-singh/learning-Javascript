class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email (){
        return `your email is : ${this._email}`
    }
    set email (val){
        this._email = val
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}adi`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const adi = new user("aditya@gmail.com", "abc")
console.log (adi.password)
console.log (adi.email)


