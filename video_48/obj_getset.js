const user = {
    _email : "adi@gmail.com",
    _pass : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value.toUpperCase();
    },
    get pass(){
        return this._pass.toUpperCase()
    },

    set pass(value){
        this._pass = value.toUpperCase();
    }
}

// console.log(user.email);
// console.log(user.pass);

//factory function
const tea = Object.create(user)
console.log(tea.email);
