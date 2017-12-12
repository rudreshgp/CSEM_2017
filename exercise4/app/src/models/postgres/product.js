const Sequelize = require('sequelize');
module.exports = {
    shop_id :{
        type : Sequelize.INTEGER,
        allowNull: false 
    },
    name :{
        type: Sequelize.STRING,
        allowNull: false 
    },
    price:{
        type:Sequelize.DOUBLE
    }
    };