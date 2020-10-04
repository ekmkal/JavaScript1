'use strict'

const calculateDogAge = dogAgeInHumanYear => {
    const dogAgeInDogYear = dogAgeInHumanYear * 7;
    return `Your doggie is ${dogAgeInDogYear} years old in dog years!`;
}

calculateDogAge(3);
calculateDogAge(1);
calculateDogAge(5);
