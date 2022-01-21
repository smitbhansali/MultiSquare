const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://multisquare:multisquare12345@cluster0.vorxo.mongodb.net/multisquare?retryWrites=true&w=majority';

//connects to mogodb

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo cloud");
    })
}

module.exports = connectToMongo;