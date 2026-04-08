import CSS from "../components/technologies/CSS";
import ExpressJS from "../components/technologies/ExpressJS";
import Html from "../components/technologies/HTML";
import JavaScript from "../components/technologies/Javascript";
import MongoDB from "../components/technologies/MongoDB";
import NodeJs from "../components/technologies/NodeJS";
import IconReact from "../components/technologies/ReactIcon";
import TailwindCss from "../components/technologies/TailwindCSS";
import { Project } from "../types/project";

const projects:Project[] = [
        {
            title:"AI Resume Builder",
            description:"A website for building resumes levraging AI for enhancement of Resumes",
            image:'/resume-builder.png',
            href:'#',
            technologies:[
                {
                    name:"React",
                    href:"https://react.dev/",
                    icon:<IconReact/>
                },
                {
                    name:"tailwindCSS",
                    href:'',
                    icon:<TailwindCss/>
                },
                {
                    name:"mongoDB",
                    href:'',
                    icon:<MongoDB/>
                },
                {
                    name:"expressJS",
                    href:'',
                    icon:<ExpressJS/>
                },
                {
                    name:"NodeJS",
                    href:'',
                    icon:<NodeJs/>
                },
            ]
        },
        {
            title:"Book My Stay",
            description:"A single place for destination booking and listing your favourite destinations",
            image:'/Wanderlust.png',
            href:'#',
            technologies:[
                {
                    name:"mongoDB",
                    href:'',
                    icon:<MongoDB/>
                },
                {
                    name:"expressJS",
                    href:'',
                    icon:<ExpressJS/>
                },
                {
                    name:"NodeJS",
                    href:'',
                    icon:<NodeJs/>
                },
                {
                    name:"HTML",
                    href:"",
                    icon:<Html/>
                },
                {
                    name:"CSS",
                    href:"",
                    icon:<CSS/>
                },
                {
                    name:"Javascript",
                    href:'',
                    icon:<JavaScript/>
                }
            ]
        },
        {
            title:"Imagify",
            description:"A website for generationg images from AI by providing user prompts",
            image:'/Imagify.png',
            href:'#',
            technologies:[
                {
                    name:"React",
                    href:"https://react.dev/",
                    icon:<IconReact/>
                },
                {
                    name:"tailwindCSS",
                    href:'',
                    icon:<TailwindCss/>
                },
                {
                    name:"mongoDB",
                    href:'',
                    icon:<MongoDB/>
                },
                {
                    name:"expressJS",
                    href:'',
                    icon:<ExpressJS/>
                },
                {
                    name:"NodeJS",
                    href:'',
                    icon:<NodeJs/>
                },
            ]
        },
        {
            title:"Weather App",
            description:"A weather app for getting real time weather updates seamlessly",
            image:'/weather.png',
            href:'#',
            technologies:[
                {
                    name:"HTML",
                    href:"",
                    icon:<Html/>
                },
                {
                    name:"CSS",
                    href:"",
                    icon:<CSS/>
                },
                {
                    name:"Javascript",
                    href:'',
                    icon:<JavaScript/>
                }
            ]
        },
]

export default projects