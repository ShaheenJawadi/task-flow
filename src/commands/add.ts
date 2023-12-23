import { load, store } from "../utils/storage";
import { ProjectData, Task } from "../types";

import inquirer from 'inquirer';
export const add= async ()=>{


    const answers = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Title:'  },
        { type: 'input', name: 'description', message: 'Description:' },
       
    ]);

    const newTasks:Task = {  id:new Date().getTime(),...answers ,status:"In progress"};
    const project = load();
    project.tasks.push(newTasks)

    store(project);

    console.log('Task added successfully.');
     
}

 