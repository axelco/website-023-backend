const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type:String, 
        required : true,
    },      
    technicalName : {
        type:String, 
        required : true,
    },          
    description : {
        type:String, 
        required : false,
    },      
})

module.exports = mongoose.model('ResumeContext', schema)