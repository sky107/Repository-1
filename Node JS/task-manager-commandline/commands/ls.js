const conf = new (require('conf'))()

const chalk = require('chalk')


function report () {
    const todoList = conf.get('todo-list')
    if (todoList && todoList.length) {
        
        todoList.forEach((task, index) => {
        console.log(`[${index+1}]  Priority: ${task.priortiy} | Task : ${task.text}`)
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

module.exports = report
