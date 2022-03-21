var express = require('express')
var router = express.Router()
const Building = require('../models/Building')

const getBuildings = async function(req, res, next){
    const building = await Building.find({})
    res.status(200).json(building)
}

const addBuilding = async function(req, res, next){
    const building = new Building({
        name: req.body.name,
        level: req.body.level
    })
    await building.save()
    res.status(201).json(building)
}

/* GET home page. */
router.get('/', getBuildings)
router.post('/', addBuilding)

module.exports = router

