
//  ***************** It is the basic ***************
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// ******************** Avoid this type of comparisioin *************************
// console.log("2" > 1);        // auto type conversion hunxa
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);             // == has different fanda than > or <
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ********************* strict comparision garna xa bhane (auto type conversion hudaina) **************************
// === 

console.log("2" === 2);