const mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    shop_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Shop",
        required:true
    },
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