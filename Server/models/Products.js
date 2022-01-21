const mongoose = require('mongoose');
const { Schema } = mongoose;

//defines the structure of the products

const ProductsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        default: 1
    },
    price:{
        type: Number,
    },
    discription:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('products', ProductsSchema);