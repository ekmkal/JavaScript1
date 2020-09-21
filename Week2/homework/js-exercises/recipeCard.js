'use strict'

let mealRecipe = {}

mealRecipe.title = 'Omelette'
mealRecipe.servings = 2
mealRecipe.ingredients = '4 eggs, 2 strips of bacon, 1 tsp salt/pepper'

for(let i = 0; i < 1; i++){
    console.log('Meal name: ' + mealRecipe.title)
}

let x = 1
while (x > 0){
    console.log('Serves: ' + mealRecipe.servings)
    x -= 1
}

let y = 0
do{
    console.log('Ingredients: ' + mealRecipe.ingredients)
    y -=1
}while(y = 0)