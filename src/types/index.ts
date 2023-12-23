
export interface ProjectData {
    projectName: string;
    description: string;
    tasks: Task[];
}
export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}