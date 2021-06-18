const { conn, Diet } = require('../db.js');

async function getAllDiets(req, res) {        
    conn
    .sync({
        force: false
    })
    .then (
        async () => {
        let resDiets = await Diet.findAll();    
          //console.log(diets.every(diet => diet instanceof Diet)); 
          //console.log("All diets: ", JSON.stringify(diets, null, 2));  
          res.send(resDiets)
    });
};

module.exports = {
    getAllDiets,
};