import { store } from "../system/storage";
import { ProjectData } from "../types";


export const init=(projectName: string, description: string)=>{


    const projectData: ProjectData = {
        projectName,
        description,
    
    };

    store(projectData);
    console.log(`Project initialized: ${projectName} - ${description}`);

}

 