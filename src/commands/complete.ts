import { load, store } from "../utils/storage";
 

export const complete= async (id:string)=>{

    const project = load();
    const index = project.tasks.findIndex((task: { id: any; }) => String(task.id) === id);
    if (index !== -1) {
      
      

      project.tasks[index] = { ...project.tasks[index], status:"Completed" };
      store(project);
      console.log(`Task  ${id} completed`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
     

 
  
  
 
}

 