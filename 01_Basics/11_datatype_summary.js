// first summary
/*
firstly many people will say 8 types of datatype ,bla bla
but basically 2 types -> 
primitive(call by value-> copy korle original memory ref deya hoi na copy banai oita dei || amra copy er sathe khela kori )

->string, number, boolean, null(empty ||tempature), undefined(variable decale, value asign, value rakhbo but jani na ki ), symbol (value unic banaite use || same component bar bar use but akta button unic oitare symbol e rakhbo), BigInt


non-primitive(reference type)
-> array, object, Function 


based on what? 
-> call by value or call by refferance || like memory te kivabe store hoitese 




Dynamically-typed languages -JS 
const value = 10;

*/






// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "spiderman"];
let myObj = {
    name: "Hemel",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



