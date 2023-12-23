import { load, store } from "../utils/storage";
import { ProjectData, Task } from "../types";

import inquirer from 'inquirer';
export const update= async (id:string)=>{

    const project = load();
    const index = project.tasks.findIndex((task: { id: any; }) => String(task.id) === id);
    if (index !== -1) {
      
      const answers = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Title:', default: project.tasks[index].title },
        { type: 'input', name: 'description', message: 'Description:', default: project.tasks[index].description },
        { type: 'input', name: 'status', message: 'Status:', default: project.tasks[index].status },
        
      ]);

      project.tasks[index] = { ...project.tasks[index], ...answers };
      store(project);
      console.log('Task updated successfully.');
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
     

 
  
  
 
}

 