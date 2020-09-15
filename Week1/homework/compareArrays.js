const arrayOne = [1, 2, 3, 4]
const arrayTwo = [1, 2, 3, 4, 'hey', ['a', 'b'], {name: 'ekmel'}]

console.log('The length of the arrayOne is ' + arrayOne.length);
console.log('The length of the arrayTwo is ' + arrayTwo.length);

if(arrayOne.length == arrayTwo.length){
    console.log('They are the same!')
}else{
    console.log('Two different sizes')
}