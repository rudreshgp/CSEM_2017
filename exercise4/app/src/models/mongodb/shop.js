const mongoose = require('mongoose');
// import { Schema } from 'mongoose';
const Schema = mongoose.Schema;
var shopSchema = new Schema({
   _id:Number,
    // owner_id :{
    //     type : String,
    //     required: true 
    // },
    ownerForShop : [{type:Schema.Types.ObjectId,ref:'Owner'}],
    productsInShop:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
    name :{
        type: Number,
        required: true 
    }
});