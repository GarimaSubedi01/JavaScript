const name = "Garima"
const age = 22


//console.log(name + age + " years");

console.log(`I am ${name} and my age is ${age}`);

const gameName = new String('garima hc game')

/*console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));*/


const newStr = gameName.substring(0, 6)
console.log(newStr);

const str2 = gameName.slice(-7, 3)
console.log(str2);

const str3 = "   robin   "
console.log(str3);
console.log(str3.trim());

const url = "https://garima.com/garima%20subedi"

console.log(url.replace('%20','-'));
console.log(url.includes('garima'));
console.log(gameName.split(' '));