'use strict'

const shoppingCart = ['bananas', 'milk'];

const addToShoppingCart = groceryItem => {
    shoppingCart.push(groceryItem);
    if (shoppingCart.length > 3){
        shoppingCart.shift()
    };
    const listOfGroceryItems = [];
    for (const item of shoppingCart){
        listOfGroceryItems.push(item)
    }
    return 'You bought %s!', listOfGroceryItems.join(', ');
}

addToShoppingCart('cola');
addToShoppingCart('salt');
addToShoppingCart('coffee');