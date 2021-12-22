
const { program } = require('commander')

const report = require('./commands/report')
const add = require('./commands/add')
const done = require('./commands/done')
const clear=require('./commands/clear');
const del=require('./commands/del');
const ls=require('./commands/ls');

program.command('report').description('To display all the completed or Pending Tasks').action(report);
program.command('add <priortiy> <task>').description("Use the format task add <number> <name>").action(add);
program.command('del <id>').description("Use the format task del <number> to delete the task").action(del);
program.command('done <id>').description("Use the format tasks done <number> to mark as done the task").action(done);
program.command('ls').description("To display the all the tasks ").action(ls);
program.command('clear').description("To clear the todolist ").action(clear);

program.parse()







