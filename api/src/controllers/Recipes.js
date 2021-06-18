const { conn, Recipe } = require('../db.js');

async function getRecipes(req, res) {
    const  name  = req.query.name;    
    
    conn
    .sync({
        force: false
    })
    .then (
        async () => {
        
        let recipes = await Recipe.findAll(); 
        let arrayRec = [];

        for(let i = 0; i < recipes.length; i++) {
            let rec = recipes[i]
            if(rec.name.includes(req.query.name)) {
                arrayRec.push(rec);
            } 
        }
        let maxNumberOfRecipes = 9;
        if(arrayRec.length > maxNumberOfRecipes) {
            arrayRec = arrayRec.slice(0, maxNumberOfRecipes - 1);
        }
        if(arrayRec.length === 0) {
            res.send('No recipe found. Please try again')
        }
        
        res.send(arrayRec);          
    })     
};

module.exports = {
    getRecipes,
};