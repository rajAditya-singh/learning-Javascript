let myName = "Aditya      "

// console.log(myName.truelenght);


let myHeros = ["Thor", "spiderman"]

let herosPower = {
    Thor : "Hammer",
    spiderman : "Sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.aditya = function(){
    console.log("My name is adi");
    
}

Array.prototype.heyaditya = function(){
    console.log(`Aditya says hello`);
    
}
// herosPower.aditya()
// myHeros.aditya()
myHeros.heyaditya()
herosPower.heyaditya()
