// set and get through properties
// Function based
function user(email, passsword){
    this._email = email
    this._password = passsword

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value.toUpperCase()
        }
    })
    Object.defineProperty(this, 'passsword',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value.toUpperCase()
        }
    })
}

const adi = new user("aditya@gmail.com",  "asd")
console.log(`Email:${adi.email},\nPass:${adi.passsword}`);
