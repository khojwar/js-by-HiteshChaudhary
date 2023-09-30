

// let score = 33

/*
    let score = "33abc"


    // we dont know the variable value when we are working in backend. so we need type conversion
    // const {score} =req.body

    // data type check garne 2 ota method hunxa. jun tala xa
    console.log(typeof score);
    console.log(typeof(score));

    let valueInNumber = Number(score)
    console.log(typeof(valueInNumber));
    console.log(valueInNumber)    //NaN => not a number
*/

/*
    // --------------------------------------------------------------------------------------
    // let score = null   
    // let score = undefined
    // let score = true
    let score = "Tika Ram"

    let valueInNumber = Number(score)
    console.log(typeof(valueInNumber))
    console.log(valueInNumber)     // score "null" xa bhane typecast to number garera print garda value "0" aauxa. 
                                    // score "undefined" xa bhane typecast to number garera print gardaa value "NaN" aauxa
                                    // score "boolen" value xa bhane typecast to number garera print gardaa "true" xa bhaen '1' ra "false" xa bhane '0' aauxa
                                    // score "string" xa bhane typecast to number garera print gardaa 'NaN' aauxa




    // Short note 

    // "33"  => 33
    // "33abc"  => NaN
    // "true" => 1; "false" => 0
*/



// ------------------------------------------------------------------------------------

/*
    // let isLoggedIn = 1     // it gives true
    // let isLoggedIn = ""    // it gives false
    let isLoggedIn = "Tika Ram"   // it gives true

    let boolenIsLoggedIn = Boolean(isLoggedIn)
    console.log(typeof(boolenIsLoggedIn))
    console.log(boolenIsLoggedIn);




    // Short note 

    // 1 => ture; 0 => false 
    // ""  => false
    // "Tika Ram"  => true

*/


// -----------------------------------------------------------------------------

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion