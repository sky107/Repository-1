const Sequelize=require('sequelize');


const sequelize=new Sequelize("testdb","mydb-use","db-password",{
    dialect:"sqlite",
    storage:"./database.sqlite",
    logging:false
})

module.exports=sequelize;