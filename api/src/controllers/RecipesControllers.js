const { conn, Recipe, Diet } = require('../db.js');

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
            if(rec.name.includes(name)) {
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
        else {
            res.send(arrayRec);
        }
    })     
};

async function getRecipesById(req, res) {
    const id = req.params.id;
    let idRes = await Recipe.findAll({
        include: [{
            model: Diet,
            through: {
                attributes: ['diets'],
                where: { id: id }
                //where: { id: id }
            }
        }]
    });

    console.log(idRes)    
    res.send(idRes)
}

/* User.findAll({
    include: [{
      model: Project,
      through: {
        attributes: ['createdAt', 'startedAt', 'finishedAt'],
        where: {completed: true}
      }
    }]
  }); */

module.exports = {
    getRecipes,
    getRecipesById
};