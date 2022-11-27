const express = require("express")
const router = express.Router()
const Definitions = require('../models/definitions.js')


//test route
router.get('/test', (req, res)=>{
    res.status(200).json({
        status: "OK",
        message: "Hello"
    })
})

//get a definition
router.get('/dictionary', async (req, res) =>{
    const {word} = req.query
    console.log(word) 
    try {
        const definition = await Definitions.find({Word: word}).lean().exec()
        return res.status(200).json({count: 1, definition})
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            error
        })
    }
})

module.exports = router