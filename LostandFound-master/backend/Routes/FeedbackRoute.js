const express = require('express')

const feebackRoute = express.Router();
const asyncHandler = require('express-async-handler')

const Feedback = require('../Model/FeedbakModel')

feebackRoute.post('/feedback',async (req, res)=>{
    const addItem = new Feedback({
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        value:req.body.value

    })

    addItem.save().then(data => res.json(data)).catch(err => {res.json(err)})
})

module.exports = feebackRoute;
