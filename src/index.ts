import fs from 'fs' ;
import { program } from 'commander';

import {init } from './commands/init';
import { add } from './commands/add';
import { update } from './commands/update';
 
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

program.parse(process.argv);