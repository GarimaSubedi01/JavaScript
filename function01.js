function myname (){
    console.log("G");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("M");
    console.log("A");    
}
//myname()
/*function addTwoNumbers(number1, number2){
    console.log(number1+number2);
    
}
addTwoNumbers(3,5)*/

/*function addTwoNumbers(number1, number2){
    return number1+number2
}

console.log(addTwoNumbers(3,6))*/

/*function loginUserMessage(username){
    if(!username){
        console.log("Username cannot be empty");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())*/
function loginUserMessage(username="sam"){
    if(!username){
        console.log("Username cannot be empty");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())