const express = require('express');
const Seller = require('../models/Seller');
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.post('/',
(req,res)=>{
    const seller = Seller(req.body);
    seller.save();
    res.send(req.body);
})

module.exports = router;