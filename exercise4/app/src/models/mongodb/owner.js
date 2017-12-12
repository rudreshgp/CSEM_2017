const mongoose = require('mongoose');
// import { Schema } from 'mongoose';
const Schema = mongoose.Schema;
var ownerSchema =   new Schema({
        _id: Number,
        name: {
            type:String,
            required:true
        },
        shopsInOwner:[{
            type:Schema.Types.ObjectId,
            ref:"Shop"
        }]
});
ownerSchema.virtual("id").get(function(){
    return this._id;
});
module.exports = ownerSchema;