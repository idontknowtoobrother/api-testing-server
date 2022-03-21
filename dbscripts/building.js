const mongoose = require('mongoose')
const Building = require('../models/Building')
mongoose.connect('mongodb://localhost:27017/example')

async function cleardb(){
    await Building.deleteMany({})
}

async function main(){
    await cleardb()
    await Building.insertMany([
        {
            name : "ตึกคณะวิทยาการสารสนเทศ" ,
            level: 11
        },
        {
            name : "ตึกสิรินธร" ,
            level: 5
        }
    ])
}

main().then(function(){
    console.log('Completed !')
})