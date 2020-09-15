function typeChecker(arg1, arg2){
    dataTypeOfArg1 = typeof arg1
    dataTypeOfArg2 = typeof arg2
    if(dataTypeOfArg1 == dataTypeOfArg2){
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

if(typeof a == typeof b){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof a)
    console.log(typeof b)
}

if(typeof a == typeof c){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof a)
    console.log(typeof c)
}

if(typeof a == typeof d){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof a)
    console.log(typeof d)
}

if(typeof b == typeof c){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof b)
    console.log(typeof c)
}

if(typeof b == typeof d){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof b)
    console.log(typeof d)
}

if(typeof c == typeof d){
    console.log("SAME TYPE")
}else{
    console.log("Not the same...")
    console.log(typeof c)
    console.log(typeof d)
}