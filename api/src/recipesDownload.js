const axios = require('axios');
const { conn, Recipe } = require('./db.js')
const { API_KEY } = process.env;


async function makeGetRequest() {
    try {        
        let res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        let recipiesApi = res.data.results;
        return recipiesApi;              
    } 
    catch(err) {
      console.log(err)
    }
  }
  
  (async () => {
    
    const allRecipes =  await makeGetRequest()
    //console.log('soy juan');
    
    conn
    .sync({
      force: false
    })
    .then(function() {
      for(var i = 0; i < allRecipes.length; i++) {
        //console.log('print juan '+ i);
        //console.log(allRecipes);
        
        Recipe.create({
          name: allRecipes[i].title,
          reviewPlate: allRecipes[i].summary,
          punctuation: allRecipes[i].spoonacularScore,
          healthLevel: allRecipes[i].healthScore,
          stepByStep: 'arreglatelas como puedas'     
        })
      }   
    })   
  })();