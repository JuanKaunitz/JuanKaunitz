const { Router } = require("express");
const router = Router();
const { getAllDiets } = require("../Controllers/Diets");

router.get("/diets", getAllDiets);



module.exports = router;