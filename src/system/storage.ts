
import   fs from 'fs';
import { ProjectData } from '../types';
import path from 'path' ;  
 
const snippetsFilePath = path.join(__dirname, 'data.json');
export const store=(data:ProjectData)=>{

 
    fs.writeFileSync(snippetsFilePath, JSON.stringify(data, null, 2));

}