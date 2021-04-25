const mongoose = require('mongoose')



const ContactSchema = mongoose.Schema({

    name :{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    phoneNo:{
      type: Number,
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

const Contact = mongoose.model('Contact',ContactSchema);


module.exports = Contact;

