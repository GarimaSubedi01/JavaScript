const accountId = 1223344
let accountEmail = "garima@gmail.com"
var accountPassword = "543221"
/*
prefer not to use var as it has block and function scope issues
*/
accountCity = "ktm"
let accountState; //if no value is assigned then its undefined
// accountId = 2
accountEmail = "subedi@gmail.com"
accountPassword = "1234545"
accountCity = "JHapa"


console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);