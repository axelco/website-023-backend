const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type: String, 
        required : true,
    },      
    graduated : {
        type: Boolean, 
        required : true,
    },          
    type : {
        type: String,
        required: true,
        enum : [
            'diploma', 
            'certificate', 
        ],        
    },
    organism : {
        type: String, 
        required : true,
    },        
    dateOfGraduation : {
        type: Date,
        required: function() {
            return this.graduated;
        }        
    },
    url : {
        type: String,
        required: false,
    }

})

module.exports = mongoose.model('Diploma', schema)