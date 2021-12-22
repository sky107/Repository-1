const conf = new (require('conf'))()

const chalk = require('chalk')


function report () {
    const todoList = conf.get('todo-list')
    if (todoList && todoList.length) {
     
        const pending=todoList.filter(e=>!e.done).map(e=>e).sort((x,y)=>x.priortiy < y.priortiy);
        const completed=todoList.filter(e=>e.done).map(e=>e).sort((x,y)=>x.priortiy < y.priortiy);
 
    console.log(chalk.greenBright("Pending"));
        pending.length ? pending.forEach((task,index)=>{
            console.log(`[${index+1}]  Priority: ${task.priortiy} | Task : ${task.text}`)
        }) : console.log("No Pending Tasks!")

        console.log(chalk.greenBright("completed"));
    
     
    completed.length ?    completed.forEach((task,index)=>{
console.log(`[D${index+1}]  Priority: ${task.priortiy} | Task : ${task.text}`)
      
        }) : console.log("No tasks completed!")

    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

module.exports = report
