const Router = require('express')

const router = Router()
const { getAllWeight } = require('../controllers/getWeight')

router.get('/',getAllWeight)


module.exports = router