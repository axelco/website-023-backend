const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    email: { 
        type: String, 
        validate: {
            validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address`
          },        
        required: true, 
        unique: true 
    }, 
    password: { 
        type: String,          
        required: true 
    },
    roles : {
        type : [String],
        required : true,
        enum : ['ADMIN', 'USER']
    },
})

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema)