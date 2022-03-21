var express = require('express')
var router = express.Router()
const Building = require('../models/Building')

const getBuildings = async function(req, res, next){
    const building = await Building.find({})
    res.status(200).json(building)
}

const addBuilding = async function(req, res, next){
    try {
        const building = new Building({
            name: req.body.name,
            level: req.body.level
        })
        await building.save()
        res.status(201).json(building)
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}

const getBuilding = async function(req, res, next){
    console.log(req.params.id);
    const building = await Building.findById(req.params.id)
    res.status(200).json(building)
}

/* GET home page. */
router.get('/', getBuildings)
router.post('/', addBuilding)
router.get('/:id', getBuilding)

module.exports = router

