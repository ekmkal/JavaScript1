'use strict';

function typeChecker(arg1, arg2){
    let dataTypeOfArg1 = typeof arg1
    let dataTypeOfArg2 = typeof arg2
    if(dataTypeOfArg1 === dataTypeOfArg2){
        console.log("SAME TYPE")
    }else{
        console.log("Not the same...")
    }
}

let a = 'hey'
let b = 'guys'
let c = {age : 15}
let d = {}

console.log("Data type of a is " + typeof a)
console.log("Data type of b is " + typeof b)
console.log("Data type of c is " + typeof c)
console.log("Data type of d is " + typeof d)

console.log(typeof a === typeof b);
console.log(typeof a === typeof c);
console.log(typeof a === typeof d);
console.log(typeof b === typeof c);
console.log(typeof b === typeof d);
console.log(typeof c === typeof d);

typeChecker(a, b);
typeChecker(a, c);
typeChecker(a, d);
typeChecker(b, c);
typeChecker(b, d);
typeChecker(c, d);