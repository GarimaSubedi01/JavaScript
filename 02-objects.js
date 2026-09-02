const instaUser = new Object()
console.log(instaUser);

instaUser.id = "123abc"
instaUser.name = "sammy"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "garima@gmail.com",
    fullname: {
        username: {
            firstname: "Garima",
            lastname: "Subedi"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(instaUser)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('istrue'));


