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