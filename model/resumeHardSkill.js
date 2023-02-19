const mongoose = require('mongoose');

const schema = mongoose.Schema({
    jobContext : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ResumeContext',
        required : true,
    },    
    name : {
        type:String, 
        required : true,
    },      
    emoji : {
        type:String, 
        required : false,
    },   
    bsIcon : {
        type:String, 
        required : false,
    },
    order: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('ResumeHardSkill', schema)