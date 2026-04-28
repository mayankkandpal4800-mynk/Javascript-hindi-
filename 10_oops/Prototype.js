/*let myName = "mayank      "
let mychannel = "lens by mayank "
console.log(myName.truelength); */

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mayank = function(){
    console.log(`mayank is present in all object`);
}

// heroPower.mayank()
myHeros.mayank()