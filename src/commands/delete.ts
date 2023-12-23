import { load, store } from "../utils/storage";
 
export const deleteTask= async (id:string)=>{

    const project = load();
    const index = project.tasks.findIndex((task: { id: any; }) => String(task.id) === id);
    if (index !== -1) {
        project.tasks.splice(index, 1);
 
      store(project);
      console.log(`Task  ${id} deleted`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
 
}

 