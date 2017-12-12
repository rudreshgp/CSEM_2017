const mongoose = require('mongoose');

const ownerSchema = require("./owner");
let Owner = global.db.model("Owner",ownerSchema,"owners");


const productSchema = require("./product");
let Product = global.db.model("Product",productSchema,"products");


const shopSchema = require("./shop");
let Shop = global.db.model("Shop",shopSchema,"shops");

module.exports = {
    Owner:Owner,
    Product:Product,
    Shop:Shop
}