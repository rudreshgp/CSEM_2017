const sequelize = require('sequelize');

const ownerSchema = require("./owner");
const Owner = global.db.define('owner',ownerSchema,{timestamps:false});
const shopSchema =require("./shop");
const Shop =  global.db.define('shop',shopSchema,{timestamps:false});

const productSchema =require("./product");
const Product = global.db.define('product',productSchema,{
    timestamps : false
});
// Owner.hasMany(Shop,{foreignKey: 'owner_id'});
Shop.belongsTo(
    Owner,
    {
        targetKey: 'id',
        foreignKey: 'owner_id'
    }
);

Product.belongsTo(
    Shop,
    {
        targetKey: 'id',
        foreignKey: 'shop_id'
    }
);




global.db.sync();
module.exports = {
    Owner:Owner,
    Product:Product,
    Shop:Shop
}