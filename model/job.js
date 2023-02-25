const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type:String, 
        required : true,
    },      
    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'JobCompany',
        required : true,
    }, 
    contractType : {
        type: String,
        required: true,
        enum : ['cdd', 'cdi', 'stage'],
    },    
    location: {
        type: String,
        required: true,
    },    
    startDate : {
        type: Date,
        required: true,
    },      
    endDate : {
        type: Date,
        required: false,
    },     
    shortDescription : {
        type: String,
        required: false,
    },    
    missionsContent : {
        type: String,
        required: false,
    },
    successContent : {
        type: String,
        required: false,
    }


})

module.exports = mongoose.model('Job', schema)