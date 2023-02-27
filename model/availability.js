const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type:String, 
        required : true,
    },      
    type : {
        type: String,
        required: true,
        enum : [
            'primary', 
            'success', 
            'info', 
            'warning',
            'danger',
        ],        
    }      
})

module.exports = mongoose.model('Availability', schema)