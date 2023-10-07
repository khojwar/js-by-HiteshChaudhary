const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    // properties
    this.username = username;       // local variable banaauna "this" keyword use baxa
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // methods
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);        // current context ko laagi "this" keyword use bhaxa

    }

    return this     // by default this return hunxa. nalekhdaa ni hunxa
}

const userOne = new User("hitesh", 12, true)            // "new" le naya instance dinxa
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);   // constructor function reference ho tara aafnai baaremaa
//console.log(userTwo);


// Note: 

// Constructor function le harek palta naya instance banaayara dinxa or copy dinxa. original laai effect gardaina
// Constructor aafnai bareko reference dinxa

// --------------"new" keyword use gardaa k k hunxa------------------
// 1. empty object create hunxa called "instance"
// 2. constructor function call hunxa "new" keywrod le gardaa (argument haru pack garxa ra dinxa)
// 3. vayako arguments haru "this" keywrod maa inject hunxa
// 4. hamilaai milxa

