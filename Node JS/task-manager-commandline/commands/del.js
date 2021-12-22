const conf = new (require('conf'))()
const chalk = require('chalk')


function del(id){

	 const todoList = conf.get('todo-list')
	 if( (id < 1) || (id > todoList.length) ){
	 	console.log("Please enter valid id of the task enclosed within [] , you can figure it out by command report , ")
	 }
	else{
		todoList.splice(id-1,1);
	console.log(todoList);
	conf.set('todo-list',todoList);
	console.log("Task has been successfully deleted")
	}



}

module.exports=del;