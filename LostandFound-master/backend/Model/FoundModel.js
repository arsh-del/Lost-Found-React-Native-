const mongoose = require('mongoose')



const FoundSchema = mongoose.Schema({

    name :{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },


    // location: {
    //     // It's important to define type within type field, because
    //     // mongoose use "type" to identify field's object type.
    //     type: {
    //         type: String,
    //         default: 'Point'},
    //     // Default value is needed. Mongoose pass an empty array to
    //     // array type by default, but it will fail MongoDB's pre-save
    //     // validation.
    //     coordinates: {
    //         type: [Number],
    //         default: [0, 0]
    //     }
    // },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
},{timeStamps:true});

const Found = mongoose.model('Found',FoundSchema);


module.exports = Found;

