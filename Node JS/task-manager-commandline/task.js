
const { program } = require('commander')

const report = require('./commands/report')
const add = require('./commands/add')
const done = require('./commands/done')
const clear=require('./commands/clear');
const del=require('./commands/del');
const ls=require('./commands/ls');


program.description(`Usage :-
$ ./task add 2 hello world    # Add a new item with priority 2 and text "hello world" to the list
$ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order
$ ./task del INDEX            # Delete the incomplete item with the given index
$ ./task done INDEX           # Mark the incomplete item with the given index as complete
$ ./task help                 # Show usage
$ ./task report               # Statistics`)

program.command('report').description('To display all the completed or Pending Tasks').action(report);
program.command('add <priortiy> <task>').description("Use the format task add <number> <name>").action(add);
program.command('del <id>').description("Use the format task del <number> to delete the task").action(del);
program.command('done <id>').description("Use the format tasks done <number> to mark as done the task").action(done);
program.command('ls').description("To display the all the tasks ").action(ls);
program.command('clear').description("To clear the todolist ").action(clear);

program.parse()







