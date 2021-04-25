const express = require('express')

const contactRoute = express.Router();
const asyncHandler = require('express-async-handler')

const Contact = require('../Model/ContactModel')

contactRoute.post('/contact',async (req, res)=>{
    const addItem = new Contact({
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        phoneNo: req.body.phoneNo

    })

    addItem.save().then(data => res.json(data)).catch(err => {res.json(err)})
})

module.exports = contactRoute;
