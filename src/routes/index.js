const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const getAllTemperaments = require("./getAllTemperaments");
const createDog = require("./createDog");
const allDogsApiDb = require("./getAllDogsApiDb");
const getDogById = require("./getDogById");
const getAllWeight = require('./getAllWeight')
//const
// Ejemplo: router.use('/auth', authRouter);

router.use("/allTemperaments", getAllTemperaments);
router.use('/allWeight', getAllWeight)
router.use("/dogs", createDog);
router.use("/dogs", allDogsApiDb);
router.use("/dogs", getDogById);

module.exports = router;
