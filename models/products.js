const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        min: 0,
        required: true,
    },
    created_at:{
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updated_at: {
        type: Date,
        default:() => Date.now(),  
    } 
})

module.exports = mongoose.model("products",productSchema)