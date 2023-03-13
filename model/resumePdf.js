const mongoose = require('mongoose');

const schema = mongoose.Schema({
    jobContext : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ResumeContext',
        required : true,
    },
    url : {
        type:String, 
        required : true,
    },             
})

module.exports = mongoose.model('ResumePdf', schema)