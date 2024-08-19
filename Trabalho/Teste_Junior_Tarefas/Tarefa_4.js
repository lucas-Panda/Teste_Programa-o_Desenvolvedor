const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];

function groupByCategory(items){
    let Fruit = items
    .filter(items => items.category == 'fruit')
    console.log("Fruit:", Fruit)

    let Vegetable = items
    .filter(items => items.category == 'vegetable')
    console.log("Vegetable:",Vegetable)

}

resultado = groupByCategory(items)
console.log(resultado)

