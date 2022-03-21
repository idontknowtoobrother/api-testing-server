var express = require('express')
const {route}=require('.')
var router = express.Router()
const Building = require('../models/Building')

/*
    
    utils function

*/
const isBuildingSuccessUpdateById = async function(buidling, res, req){
    if(!buidling){
        res.status(404).json({
            message: `Unable to update ${req.params.id}`
        })
        return false
    }
    
    return true
}


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
    const isPass = await isBuildingSuccessUpdateById(buidling, res, req)
    if(!isPass)return
    res.status(200).json(building)
}

const updateBuilding = async function(req, res, next){

    /*
       Logic
        const buidling = await Building.findById(req.params.id)
        buidling.name = req.body.name
        buidling.level = req.body.level
        await buidling.save()
    */

    const buidling = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
    const isPass = await isBuildingSuccessUpdateById(buidling, res, req)
    if(!isPass)return
    res.status(200).json(buidling)

}

const updatePartialBuilding = async function(req, res, next){
    const buidling = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
    const isPass = await isBuildingSuccessUpdateById(buidling, res, req)
    if(!isPass)return
    res.status(200).json(buidling)
}

const deleteBuilding = async function(req, res, next){
    await Building.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: `deleted ${req.params.id}` })
}

/* GET home page. */
router.get('/', getBuildings)
router.post('/', addBuilding)
router.get('/:id', getBuilding)
router.put('/:id', updateBuilding)
router.patch('/:id', updatePartialBuilding)
router.delete('/:id', deleteBuilding)

module.exports = router

