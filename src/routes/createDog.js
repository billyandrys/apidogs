const Router = require('express')
const router = Router()
const { createDog } = require('../controllers/createDog')
router.post('/', createDog)

module.exports = router
