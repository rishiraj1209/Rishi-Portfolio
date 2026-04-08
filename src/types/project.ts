import { Technology } from "./experience";

export interface Project{
    title:string;
    description:string;
    image:string;
    href:string;
    technologies : Technology[]
}