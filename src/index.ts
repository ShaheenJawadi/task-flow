import fs from 'fs' ;
import { program } from 'commander';

import {init } from './commands/init';
 
const packagejson = JSON.parse(fs.readFileSync("package.json", "utf8"));
program.name('tflow').version(packagejson.version).description(packagejson.description);


program
.command('init')
.description('Initialize the project')
.action(init);


 



program.parse(process.argv);