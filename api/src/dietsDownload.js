const { conn, Diet } = require('./db.js')

// tipos de dietas vegetarian, vegan, glutenFree, Ketogenic, Lacto-Vegetarian, Ovo-Vegetarian, Pescetarian,
// Paleo, Primal, Whole30

const tipoDietas = ['vegetarian', 'vegan', 'glutenFree', 'Ketogenic', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']

conn
.sync({
    force: false
})
.then(function() {
    for(var i = 0; i < tipoDietas.length; i++) {
        
    Diet.create({
        id: i,
        name: tipoDietas[i],          
    })
    }   
});