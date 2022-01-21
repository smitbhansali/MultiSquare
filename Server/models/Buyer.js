const mongoose = require('mongoose');
const { Schema } = mongoose;

//defines the structure of the seller

const BuyerSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    wishlist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    history:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }
  });

  module.exports = mongoose.model('buyer', BuyerSchema);