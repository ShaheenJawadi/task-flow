
import   fs from 'fs';
import { ProjectData } from '../types';
import path from 'path' ;  
 
const filePath = path.join(__dirname, 'data.json');
export const store=(data:ProjectData)=>{

 
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

}

export function load ():ProjectData {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }