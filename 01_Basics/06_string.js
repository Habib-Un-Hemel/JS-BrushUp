const name1 = "Hemel";
const age = 22;

// name cross hoiche karon by defualt kisu typescript er jinish ashe 
// console.log(name + age + " ok");its not readable

console.log(`my name is ${name1}and my age is ${age} so dont worry`)


//  new obj akta -> browser console e dekho new things
const strName = new String('hemel');
console.log(strName[3]);
console.log(strName.bold());
console.log(strName.toUpperCase());
console.log(strName.trim());





const name = "Hemel"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hemel-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //-1 as t missing




const newString = gameName.substring(0, 4) //0 1 2 3 
console.log(newString);
console.log("____________________________")
const anotherString = gameName.slice(-1, -4)
console.log(anotherString);

console.log("____________________________")
const newStringOne = "   Hemel    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://developer.mozilla.org/en%20US/docs/Web/JavaScript/Reference/Operators/Increment"

// this will replace  %20 with -
console.log(url.replace('%20', '-'))

// aha ashe kina 
console.log(url.includes('aha'))


console.log(gameName.split('-'));