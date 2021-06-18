const { Router } = require('express');
const recipes = require("./recipes");
const diets = require('./diets')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/myRecipes", recipes);
router.use("/myDiets", diets)


module.exports = router;
