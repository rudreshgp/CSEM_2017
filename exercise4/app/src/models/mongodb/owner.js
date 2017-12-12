const mongoose = require('mongoose');
var ownerSchema =   new mongoose.Schema({
        name: {
            type:String,
            required:true
        }
});
ownerSchema.virtual("id").get(function(){
    return this._id;
});
module.exports = ownerSchema;