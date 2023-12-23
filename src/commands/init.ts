import { store } from "../utils/storage";
import { ProjectData } from "../types";

import inquirer from 'inquirer';
export const init= async (projectName: string, description: string)=>{


    const answers = await inquirer.prompt([
        { type: 'input', name: 'projectName', message: 'Project Name:'  },
        { type: 'input', name: 'description', message: 'Project description:' },
    
    ]);


    const newSnippet:ProjectData = {  ...answers , tasks:[] };
    store(newSnippet);
    console.log('Project initialized successfully.');
     
}

 