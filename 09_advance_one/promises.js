// promise --> future maa hune kura ho.

// yasmaa 2 ota kuraa jaanna parxa or two parts
// 1. promise banaauna
// 2. consume promise

// 1.promise create gareko
const promiseOne = new Promise(function(resolve, reject){       // Note: "resolve" keyword direct connect to "then()""
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

// 2. promise consume gareko
promiseOne.then(function(){
    console.log("Promise consumed");
})


// *************************** maathiko dubai parts laai sangai lekhelo***************************
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// ************************************************************************
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// *****************************( complete code by using .then.catch promise technique)*******************************
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// *************************** (complete code by using async await promise technique) **************************************************
// promise --> future maa hune kura ho. yaslaai handel garne tarikaa dherai xa
// a) .then.catch bata 
// b) Async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//*****************************************************************************************
// ************************************* Async awat + fetch ***********************************
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// *************same maathiko kaam laai .then.catch use garera solve gareko***********
// **********************************fetch + .then.catch ********************************************
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()      // response laai return gareko
})
.then((data) => {               // data laai handel gareko
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.