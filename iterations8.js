//reduce
const myNums = [1, 2, 3]
const myTotal = myNums.reduce((acc, currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc+currval
},0)
console.log(myTotal);

const shoppingCart = [
    {
        item: "Js Course",
        price: 1999
    },
    {
        item: "py Course",
        price: 999
    },
    {
        item: "java Course",
        price: 2999
    },
    {
        item: "mob dev Course",
        price: 5999
    },
]
const totalPrice = shoppingCart.reduce((accum, item)=>accum+item.price,0)
console.log(totalPrice);
