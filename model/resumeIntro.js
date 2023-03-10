const mongoose = require('mongoose');

const schema = mongoose.Schema({
    jobContext : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ResumeContext',
        required : true,
    },
    description : {
        type:String, 
        required : true,
    },          
    shortDescription : {
        type:String, 
        required : false,
    },      
})

module.exports = mongoose.model('ResumeIntro', schema)