const Router = require("express");
const router = Router();

const { getDogById } = require("../controllers/getDogById");

router.get("/:idRaza", getDogById);

module.exports = router;
