const mongoose = require('mongoose');

// Schema

const productSchema = new mongoose.Schema({
    productName : {
        type:String        
    },
    price : {
        type:Number
    },
    color : {
        type:String
    },
    stock : {
        type:Number
    }
})

module.exports = mongoose.model('Product', productSchema)


