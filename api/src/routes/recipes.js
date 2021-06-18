const { Router } = require("express");
const router = Router();
const { getAllRecipes } = require("../Controllers/Recipes");

router.get("/", getAllRecipes);

//router.get("/", getAllRecipes);


module.exports = router;