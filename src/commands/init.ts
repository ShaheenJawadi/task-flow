import { store } from "../utils/storage";
import { ProjectData } from "../types";

import inquirer from 'inquirer';
export const init= async ()=>{


    const answers = await inquirer.prompt([
        { type: 'input', name: 'projectName', message: 'Project Name:'  },
        { type: 'input', name: 'description', message: 'Project description:' },
    
    ]);


    const newProject:ProjectData = {  ...answers , tasks:[] };
    store(newProject);
    console.log('Project initialized successfully.');
     
}

 