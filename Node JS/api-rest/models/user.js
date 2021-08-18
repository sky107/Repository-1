/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const Sequelize=require('sequelize');
const sequelize=require('../util/sql');
const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    apiKey:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports=User;