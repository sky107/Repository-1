const conf = new (require('conf'))()
const chalk = require('chalk')


function done(id){

	 const todoList = conf.get('todo-list')
	 if( (id < 1) || (id > todoList.length) ){
	 	console.log("Please enter valid id of the task enclosed within [] , you can figure it out by command report , ")
	 }
	else{
		todoList.forEach((val,ind)=>{
			if( id-1 === ind){
				console.log("found");
				val.done=true;
			}
		})
		console.log(todoList);
	conf.set('todo-list',todoList);
	console.log("Task has been successfully marked as done")
	}



}

module.exports=done;