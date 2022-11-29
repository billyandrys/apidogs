const Router = require('express')
const router = Router()
const cors = require('cors')
const { createDog } = require('../controllers/createDog')
router.post('/', cors(), createDog)

module.exports = router
