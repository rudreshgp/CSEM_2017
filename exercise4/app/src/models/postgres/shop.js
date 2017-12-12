const Sequelize = require('sequelize');
// module.exports = global.db.define('shop',{
//    id:{
//     type:Sequelize.INTEGER,
//     primaryKey: true 
//    },
module.exports ={
        owner_id :{
            type : Sequelize.INTEGER,
            allowNull: false 
        },
        name :{
            type: Sequelize.STRING,
            allowNull: false 
        }
    };