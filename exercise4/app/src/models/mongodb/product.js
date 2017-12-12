const mongoose = require('mongoose');
// import { Schema } from 'mongoose';
const Schema = mongoose.Schema;
var productSchema = new Schema({
    _id : Number,
    // shop_id : {
    //     type:Number,
    //     required:true
    // },
    shopForProduct:[{
        type:Schema.Types.ObjectId,
        ref:'Shop'
    }],
    name : {
        type:String,
        required:true
    },
    price : Number
});
productSchema.virtual("id").get(function(){
    return this._id;
});
module.exports = productSchema;