//singleton

// object literals

const mySym = Symbol("key1")

const JSUser = {
    [mySym]: "myKey1",
    name: "Garima",
    "full name": "Garima SUbedi",
    age: "23",
    location: "Kathmandu",
    email: "garima12@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["full name"]);
console.log(JSUser[mySym]);

JSUser.email = "garima98@gmail.com"
//Object.freeze(JSUser)
JSUser.email = "garima@gmail.com"

console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(JSUser.greeting());

JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JSUser.greetingTwo());
