const mongoose = require('mongoose');
const ownerSchema = require("./owner");
let Owner = mongoose.model("Owner",ownerSchema,"owners");


const productSchema = require("./product");
let Product = mongoose.model("Product",productSchema,"products");


const shopSchema = require("./shop");
let Shop = mongoose.model("Shop",shopSchema,"shops");

module.exports = {
    Owner:Owner,
    Product:Product,
    Shop:Shop
}