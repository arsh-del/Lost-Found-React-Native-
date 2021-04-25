const express = require('express')

const foundRouter = express.Router();
const asyncHandler = require('express-async-handler')

const Found = require('../Model/FoundModel')

foundRouter.post('/found',async (req, res)=>{
    const addItem = new Found({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description
    })

    addItem.save().then(data => res.json(data)).catch(err => {res.json(err)})
})
foundRouter.get('/foundItems',asyncHandler(async(req,res) =>{
    const listFound = await Found.find({})
    res.json(listFound)
}))
foundRouter.get('/foundItems/:id',asyncHandler(async(req,res) =>{
    const found = await Found.findById(req.params.id);
    if(found){
        res.json(found)
    }
    else{
        res.status(404).json({message:"Item not found"})
    }
}))
foundRouter.delete('/foundItems/:id',asyncHandler(async(req,res) =>{
    const found = await Found.findByIdAndDelete(req.params.id);
    if(found){
        res.json(found)
    }
    else{
        res.status(404).json({message:"Item not found"})
    }
}))
foundRouter.put('/foundItems/:id',asyncHandler(async(req,res) =>{
 Found.findByIdAndUpdate(req.params.id,req.body ).then(function (found) {
res.send(found)
});

}))

module.exports = foundRouter;
