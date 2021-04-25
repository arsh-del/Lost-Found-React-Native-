const express = require('express')

const lostRouter = express.Router();
const asyncHandler = require('express-async-handler')

const Lost = require('../Model/LostModel')

lostRouter.post('/lost',async (req, res)=>{
    const addItem = new Lost({
        //user:req.body.user,
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description
    })

    addItem.save().then(data => res.json(data)).catch(err => {res.json(err)})
})
lostRouter.get('/lostItems',asyncHandler(async(req,res) =>{
    const listFound = await Lost.find({})
    res.json(listFound)
}))
lostRouter.get('/lostItems/:id',asyncHandler(async(req,res) =>{
    const lost = await Lost.findById(req.params.id);
    if(lost){
        res.json(lost)
    }
    else{
        res.status(404).json({message:"Item not found"})
    }
}))
lostRouter.delete('/lostItems/:id',asyncHandler(async(req,res) =>{
    const lost = await Lost.findByIdAndDelete(req.params.id);
    if(lost){
        res.json(lost)
    }
    else{
        res.status(404).json({message:"Item not found"})
    }
}))
lostRouter.put('/lostItems/:id',asyncHandler(async(req,res) =>{
    Lost.findByIdAndUpdate(req.params.id,req.body ).then(function (lost) {
        res.send(lost)
    });

}))


module.exports = lostRouter;
