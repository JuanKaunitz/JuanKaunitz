const { conn, Diet } = require('../db.js');

async function getAllDiets(req, res) {        
    conn
    .sync({
        force: false
    })
    .then (
        async () => {
        let resDiets = await Diet.findAll();             
        res.send(resDiets)
    });
};

module.exports = {
    getAllDiets,
};