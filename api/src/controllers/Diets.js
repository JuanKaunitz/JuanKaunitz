const { conn, Diet } = require('../db.js');
const { Op } = require('sequelize');


async function getAllDiets(req, res) {
    
    let typeDiet = 'vegan';
     
    conn
    .sync({
        force: false
    })
    .then (
        async () => {
        let diets = await diet.findAll({
            where: { 
                name: typeDiet 
            }
          });    
          console.log(diets.every(diet => diet instanceof Diet)); 
          console.log("All diets: ", JSON.stringify(diets, null, 2));  
          res.send(diets)
    });

}


module.exports = {
    getAllDiets,
};