const mongoose = require('mongoose')
const { Schema } = mongoose
const buildingSchema = Schema({
    name: String,
    level: Number
})

module.exports = mongoose.model('Building', buildingSchema)