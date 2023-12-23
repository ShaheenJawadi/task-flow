import fs from 'fs' ;
import { program } from 'commander';

import {init } from './commands/init';
import { add } from './commands/add';
import { update } from './commands/update';
import { complete } from './commands/complete';
import { deleteTask } from './commands/delete';
import { list } from './commands/list';
 
const packagejson = JSON.parse(fs.readFileSync("package.json", "utf8"));
program.name('tflow').version(packagejson.version).description(packagejson.description);


program
.command('init')
.description('Initialize the project')
.action(init);


program
.command('add')
.description('Add a new task')
.action(add);

program
    .command('update <taskId>')
    .description('Update a task')
    .action(update);

program
    .command('complete <taskId>')
    .description('Complete a task')
    .action(complete);

program
    .command('delete <taskId>')
    .description('Delete a task')
    .action(deleteTask);


program
    .command('list')
    .description('List all tasks')
    .action(list);

program.parse(process.argv);