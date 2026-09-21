//for of 

const arr = [1,2,3,4,5]

for (const num of arr){
    console.log(num);
    
}
const greetings = "hello world!"
for(const greets of greetings){
    console.log(greets);
    
}

//maps: not iterable for object
const map = new Map()
map.set('NP', "Nepal")
map.set('IN', "India")
map.set('FR', "France")
map.set('NP', "Nepal") // doesnt print: only unique values


//console.log(map);

for (const [key,value] of map){
    console.log(key, ':-', value);
    
}

const myObject = {
    'anime1' : 'One piece',
    'anime2' : 'Naruto'
}
/*for(const [key, value] of myObject){
    console.log(key, ':-', 'value');
    
} */