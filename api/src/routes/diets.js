const { Router } = require("express");
const router = Router();
const { getAllDiets } = require("../controllers/DietsController");

router.get("/", getAllDiets);


module.exports = router;