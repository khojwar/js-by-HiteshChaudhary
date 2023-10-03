// **************************** for in *************************************
// "for in" object ko laagi badhi use hunxa. previous js file maa "for of" le kaam gareko thiyana. 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}



// --------------------------------------- Map "for in" kaam gardaina----------------------------------------------
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {             // kei ni print gardaina. kinaki "Map" is  non iterable
//     console.log(key);
// }