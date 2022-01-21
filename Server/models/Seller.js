const mongoose = require('mongoose');
const { Schema } = mongoose;

//defines the structure of the seller

const SellerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('seller', SellerSchema);