/************************************
* Author : Siddharth Kumar Yadav
* Email: siddharthsk101@gmail.com
************************************/
const Sequelize=require('sequelize');
const sequelize=require('../util/sql');
const Task=sequelize.define('task',{
	id:{
	type:Sequelize.STRING,
	allowNull:false,
	primaryKey:true
},
    email:{
        type:Sequelize.STRING,
        allowNull:false,
	
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
	type:Sequelize.STRING,
	allowNull:false
	}
});

module.exports=Task;