const { Router } = require("express");
const router = Router();
const { getRecipes, getRecipesById } = require("../controllers/RecipesControllers");

router.get("/", getRecipes);
router.get("/:id", getRecipesById)


module.exports = router;