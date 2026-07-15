/*
#Primitive Data Types:
String, Number, Boolean, Null, Undefined, Symbol, BigInt

#Reference Data Type (Non primitive):
Arrar,Object,Functions
*/

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id===anotherId);

const bigNumber = 13294894782345846375n //n at the end represents big In
const strawHats = ["luffy", "zoro", "nami", "sanji"] 

let myObj={
    name: "Garima",
    age: 22
};

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof myFunction);

//Stack (primitive) => copy of actual value, Heap (non primitive)=> reference of the value

let captain = "monkeydluffy"
let sencho = "shanks"
console.log(captain);

console.log(sencho);

let sh1 = {
    name: "zoro",
    position : "swordsman"
}
let sh2 = sh1

sh2.position = "vicecaptain"

console.log(sh1.position);
console.log(sh2.position);

