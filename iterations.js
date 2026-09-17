// for loop
for(let num= 0; num<=10; num++){
    const element = num;
    if(element==5){
        //console.log("5 is the best num");
        }
    //console.log(element);
    
}

for(i=0; i<=10; i++){
    //console.log(`Outer loop: ${i}`);
    for(j=0; j<=10; j++){
        //console.log(`Inner Loop: ${j} and outer loop: ${i}`);
       // console.log(`${i} * ${j} = ${i*j}`); 
    }
    
}

let myArray = ["luffy", "zoro", "nami", "sanji", "usopp", "chopper", "robin", "franky", "brook", "jinbei"]
for(let index = 0; index<myArray.length; index++){
    console.log(myArray[index]);
    
}

for(let index = 1; index<=20; index++){
    if (index==5) {
        console.log("5 detected");
        
        break;
    }
    //console.log(`${index}`);
    
}

for(let index = 1; index<=20; index++){
    if (index==5) {
        console.log("5 detected");
        
        continue;
    }
    console.log(`${index}`);
    
}