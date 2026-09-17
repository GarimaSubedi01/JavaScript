userEmail = []
if(userEmail){
    console.log("logged in");
}
else{
    console.log("email not found");
    
}

//falsy value
//false, 0 , -0,  BigInt 0n, "", NaN, null, undefined

//truthy value
//"0", 'false', " ", [], {}, function(){}

if( userEmail.length == 0){
    console.log("cant be empty");
    
}
myobj = {}
if(Object.keys(myobj).length==0){
    console.log("empty obj");
    
}

//Nullish Coalescing Operator (??): null undefined

let val = 5??10
let val2 = null??30
let val3 = undefined??60
let val4 = null??"100"??"2"
console.log(val);
console.log(val2);
console.log(val3);
console.log(val4);


//ternary operator

const salary = 50000;
salary<=40000? console.log("poor"): console.log("rich");

