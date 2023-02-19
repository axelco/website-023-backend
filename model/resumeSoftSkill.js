const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type:String, 
        required : true,
    },      
    order: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('ResumeSoftSkill', schema)