
import   fs from 'fs';
import { ProjectData } from '../types';
import path from 'path' ;  
 
const snippetsFilePath = path.join(__dirname, 'data.json');
export const store=(data:ProjectData)=>{

 
    fs.writeFileSync(snippetsFilePath, JSON.stringify(data, null, 2));

}

function load () {
    return JSON.parse(fs.readFileSync(snippetsFilePath, 'utf8'));
  }