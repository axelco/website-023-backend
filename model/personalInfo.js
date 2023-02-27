const mongoose = require('mongoose');

const schema = mongoose.Schema({
    avatar : {
        type:String, 
        required : true,
    },
    firstName : {
        type:String, 
        required : true,
    },
    lastName : {
        type:String, 
        required : true,
    },    
    birthDate : {
        type:Date, 
        required : true,
    },  
    nationality : {
        type:String, 
        required : true,
    },             
    location : {
        type : Object,
        required : true,
    },         
    availability : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Availability',
        required : true,
    },
    hobbies : {
        type : Array,
        required : false,
    },
    email : {
        type : String,
        required : true,
    },
    linkedin : {
        type : String,
        required : true,
    },    
})

module.exports = mongoose.model('personalInfo', schema)