const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "python", "rb"]

for (const key in programming) {
    console.log(programming[key]);
    
}