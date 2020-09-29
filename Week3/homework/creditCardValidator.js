'use strict'

const validateCreditNumber = cardNumber => {
    // I create an array to collect the different numbers from the cardNumber
    const numbersOfCardNumber = [];
    // If the number is already in the array, 'for' loop iterates again;
    // if not, the number is pushed into the array.
    for (let i = 0; i < cardNumber.length; i++) {
        if (numbersOfCardNumber.includes(cardNumber[i])) {
            continue;
        } else{
            numbersOfCardNumber.push(cardNumber[i]);
        }
    };

    // Calculation of the sum of all numbers
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        sum += Number(cardNumber[i]);
    };

    // Switch statement for checking the criterias
    switch(true) {
        case !(cardNumber.length === 16) :
            return console.log(`Invalid! The input ${cardNumber} should contain 16 numbers!`);
            break;
        case !(Number.isInteger(Number(cardNumber))) :
            return console.log(`Invalid! The input ${cardNumber} should contain only numbers!`);
            break;
        case !(numbersOfCardNumber.length >= 2) :
            return console.log(`Invalid! The input ${cardNumber} should contain at least 2 different types of numbers!`);
            break;
        case !(Number(cardNumber[cardNumber.length - 1]) % 2 === 0) :
            return console.log(`Invalid! The last number of input ${cardNumber} should be even!`);
            break;
        case !(sum > 16) :
            return console.log(`Invalid! The sum of all the numbers of input ${cardNumber} should be greater than 16!`);
            break;
        default :
            return console.log(`Success! The input ${cardNumber} is a valid credit card number!`)
            break;
    }
}

validateCreditNumber('9999777788880000')
validateCreditNumber('6666666666661666')
validateCreditNumber('a92332119c011112')
validateCreditNumber('4444444444444444')
validateCreditNumber('1111111111111110')
validateCreditNumber('6666666666666661')