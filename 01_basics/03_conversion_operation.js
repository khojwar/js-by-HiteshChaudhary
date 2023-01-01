

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