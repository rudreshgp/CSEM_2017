const mongoose = require('mongoose');
// import { Schema } from 'mongoose';
var shopSchema = new mongoose.Schema({
    //    _id:Number,
    owner_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Owner',
        required: true 
    },
    // ownerForShop : [
    //     {
    //         type:mongoose.Schema.Types.ObjectId,ref:'Owner',
    //         required : true
    //     }
    // ],
    // productsInShop:[{
    //     type:Schema.Types.ObjectId,
    //     ref:'Product'
    // }],
    name :{
        type: String,
        required: true 
    }
});
module.exports = shopSchema;