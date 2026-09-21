// for each doesnt return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
//const newNums = myNums.filter((num)=>num>4)

//console.log(newNums);

const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    {title: 'HP', genre: 'fiction', publish: 1981},
    {title: 'Anne', genre: 'history', publish: 1982},
    {title: 'lotr', genre: 'fiction', publish: 1983},
    {title: 'atomic habits', genre: 'non-fiction', publish: 2020},
    {title: 'ek chihan', genre: 'fiction', publish: 1990},
    {title: 'thgtg', genre: 'fiction', publish: 1970},
    
]
let userBooks = books.filter((item)=>{
    return item.genre === 'fiction'
})
userBooks = books.filter((item)=>(item.publish>1981 && item.genre==='fiction'))


console.log(userBooks);

