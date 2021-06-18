const { Router } = require("express");
const router = Router();
const { getRecipes } = require("../Controllers/Recipes");

router.get("/", getRecipes);

//router.get("/", getAllRecipes);


module.exports = router;