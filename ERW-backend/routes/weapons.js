const express = require('express')
const weaponsRouter = express.Router()
const controller = require('../controllers/weapons')

weaponsRouter.get('/', controller.getWeapons)
weaponsRouter.get('/:id', controller.getWeapon)

module.exports = weaponsRouter