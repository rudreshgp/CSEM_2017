const mongoose = require('mongoose');
const ownerSchema = require("./../mongodb/owner.js");
let Owner = mangoose.model("Owner",ownerSchema,"owners");


const productSchema = require("./../mongodb/product.js");
let Product = mangoose.model("Product",productSchema,"products");


const shopSchema = require("./../mongodb/shop.js");
let Shop = mangoose.model("Shop",shopSchema,"shops");

module.exports = {
    Owner:Owner,
    Product:Product,
    Shop:Shop
}