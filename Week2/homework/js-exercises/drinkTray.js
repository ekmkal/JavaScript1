'use strict'

const drinkTray = []
const drinkTypes = ['cola', 'lemonade', 'water'];

let indexOfDrinkTypes = -1

for (let i = 0; i < 5; i++){
    if(i % 2 === 0){
        indexOfDrinkTypes += 1
    }
    drinkTray.push(drinkTypes[indexOfDrinkTypes])
}

console.log('Hey guys, I brought a %s!', drinkTray.join(', '))