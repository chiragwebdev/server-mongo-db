const mongoose = require('mongoose')

const schemaData= new mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const demo = new mongoose.model('demo', schemaData);

module.exports = demo;