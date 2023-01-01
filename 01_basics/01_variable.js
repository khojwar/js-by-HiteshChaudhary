const accountId = 144553
let accountEmail = "khojwartikaram@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState      // if you print it gives result as "value is undefined"



// accountId = 2   // conts not allowed to change 

console.log(accountId)


accountEmail = "krk@trk.com"
accountPassword = "212121"
accountCity = "Nawalparasi"

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountEmail, accountPassword, accountCity, accountState])