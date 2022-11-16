const { Router } = require("express");
const { getAllTemperaments } = require("../controllers/getAllTemperaments");
const router = Router();

router.get("/", getAllTemperaments);

module.exports = router;
