const { conn, Recipe } = require('../db.js');

async function getAllRecipes(req, res) {
    const  name  = req.query.name;    
    
    conn
    .sync({
        force: false
    })
    .then (
        async () => {
        let recipes = await Recipe.findAll({ 
            where: {
              name: name
            } 
        }); 
        
        res.send(recipes) 
    })     
};

module.exports = {
    getAllRecipes,
};