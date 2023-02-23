const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type:String, 
        required : true,
    },      
    description : {
        type: String,
        required: false,
    },
    websiteUrl : {
        type: String,
        required: false,        
    }
})

module.exports = mongoose.model('JobCompany', schema)