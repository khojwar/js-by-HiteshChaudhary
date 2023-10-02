// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();           //dui ota iife lekhdaa semicolon use garne natra execute hudaina 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')





// -------------------------------IIFE----------------------------------
// 1. function imidiatly execute garna laai iife use garinxa
// 2. for interview --> global scope ko pollution le problem hunasakxa. global scope ko variable or declaration hunxa, tesko pollution bata bachnako laagi iife use garinxa.
