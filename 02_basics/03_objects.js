// singleton
// Object.create

// object literals

const mySym = Symbol("key1")    // key laai unique banaako


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",          // symbol laai refer garnalaai square [] bracket use garinxa
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)        // most of the time yo tarikaa use garxau. Tara access garne raamro tarikaa hoena all the time
// console.log(JsUser["email"])         // access garne raamro tarika ho
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])       // aru option nai xaina square bracket [] le nai access garna parxa

JsUser.email = "hitesh@chatgpt.com"     // email laai override gareko
// Object.freeze(JsUser)                // freeze gardiyo bhane override hudaina
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);         // string interpolation or ``
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());