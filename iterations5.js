const coding = ["js", "ruby", "python"]

//coding.forEach(function(val){
  //  console.log(val);
    
//})

coding.forEach((item)=>{
    console.log(item);
    
})

function print(value){
    console.log(value);
}

coding.forEach(print)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        filename : "js"
    },
    {
        languageName: "java",
        filename : "java"
    },
    {
        languageName: "python",
        filename : "py"
    },
]
myCoding.forEach((obj)=>{
    console.log(obj.filename);
    
})