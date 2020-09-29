'use strict'

const cartForParty = {
    beers: 2.50,
    chips: 2.99,
    chocolate: 1.75,
    almond: 2.49,
    cola: 1.50
};

const calculateTotalPrice = numObject => {
    let totalPrice = 0;
    for (let key of Object.keys(cartForParty)) {
        totalPrice += cartForParty[key];
    }
    //return console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice));
    return console.log('Total: ' + Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice));
}

calculateTotalPrice(cartForParty);