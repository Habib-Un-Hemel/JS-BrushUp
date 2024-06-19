// Stack and Heap memory 

/*
early language like c , i have to reserve the the memory and memory free is both my task as a programmer
 
have to thik kothai memory space dibo, koto dibo

abr er ager language like assembly language e aro pain code likha

new language e atto memory access deya hoi na || garbage collector thake 


*/
// call by value -> value er copy ditese then change oita
let email1 = "hemel@gmail.com"
let newEmail = email1
newEmail = "hemel@yahoo.com"

console.log(email1)
console.log(newEmail)

//call by reference

let obj1 = {
    nam : "hemel",
    age : 23
}

let newObj = obj1

newObj.nam = "Tiger"; 

console.log(obj1.nam);
console.log(newObj.nam);