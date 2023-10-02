// "this" keyword le current context laai vanxa

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {             // EXPLICIT RETURN --> curly bracket use gareko xa bhane return lekhnai parxa
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      // implicit return --> A function is returned values without using the return keyword, it's called an implicit return.

// const addTwo = (num1, num2) => ( num1 + num2 )       // react maa yo dherai use hunxa

const addTwo = (num1, num2) => ({username: "hitesh"})      // object laai implicit return gareko


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()