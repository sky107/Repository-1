/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const Sequelize=require('sequelize');

const sequelize=new Sequelize('test','root','',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;