const Router = require('express')
const { Model } = require('sequelize')

const router = Router()

const { getAllDogs } = require('../controllers/getAllDogs')

router.get('/', getAllDogs)


module.exports = router 