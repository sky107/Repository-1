const conf = new (require('conf'))()
const chalk = require('chalk')


function clear(){

	 conf.delete('todo-list');

	 console.log(chalk.green.bold("All Tasks Deleted"))




}

module.exports=clear;