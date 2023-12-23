import { load  } from "../utils/storage";
 

export const list= async ()=>{

    const project = load();
 
     
    console.log('List of tasks:');
    project.tasks.forEach((task) => {
        console.log(`${task.id}- ${task.title} * ${task.status}`);
    });
 
  
  
 
}

 