
// Official documentation anusaar 2 type of datatype hunxa
//  kasari memory maa data store garne ra access garne basis maa 2 types maa catacorise gareko hunxa
// 1. primitive (call by value - jaba katai bata katai copy garxau, taba yasko original memory ko reference diedaina. copy garera dienxa. yasmaa j j chenges hunxa sabai copy maa chenges hunxa)
// 2. reference / non-primitive 


// ------------------------------------------------------------------------------------------------


// 1. Primitive

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



// 2. Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ********************************** note ************************************
// note: jaile pani non-primitive ko datatype object hunxa. eg
// typeof functioin --> function object
// typeof array --> object
// typeof object --> object




// ++++++++++++++++++++++++++++++++++++ Memory types +++++++++++++++++++++++++++++++++++++++++++
// 1. Stack 
// primitive datatype le stack memory use garxa
// jaba stack memory use hunxa, taba jun variable use garekaa xau tesko copy banxa
// eg. 

let myYoutubename = "tikaramkhojwardotcom"

let anothername = myYoutubename
anothername = "khojwar"

console.log(myYoutubename)
console.log(anothername)


// 2. Heap 
// non-primitive le heap memory use garxa
// function or object heap vitra define gareko xa vane tehaa bata reference banxa original value ko. yasmaa j chenge garxau tio original value maa chenge hunxa

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)




// ******************************** JS is dynamically typed language ********************************************

// JavaScript is a "dynamically typed" language. 
// In a dynamically typed language like JavaScript, variable types are determined at runtime, not at compile time. 
// This means that you can assign values of different types to the same variable during the execution of a program, and the type of a variable can change as the program runs. 
// JavaScript uses a feature called "type inference" to determine the type of a variable based on the value assigned to it.
// eg. 

let x = 5; // x is a number
x = "Hello, world!"; // x is now a string
x = [1, 2, 3]; // x is now an array
