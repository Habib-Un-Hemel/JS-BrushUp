const accountId = 22241042
let accountEmail = "nabi3321hemel@gmail.com"
var accountPassword = "00000"
accountCity = "Dinajpur"

// accountId = 2314144 # is not possible because of const
/*
scope = {

}
var do not understant scope 
block scope e kono idea nai
if e var use korlam oikhane var deileo change shob
*/

accountEmail = "ST_hemel@gmail.com"
accountPassword = "1234"
accountCity = "Dhaka"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console's different method
console.table([accountId, accountEmail, accountPassword, accountCity])


console.table([accountEmail,accountId,accountCity])