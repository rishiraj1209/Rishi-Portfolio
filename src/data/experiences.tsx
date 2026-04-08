import CSS from "../components/technologies/CSS";
import ExpressJS from "../components/technologies/ExpressJS";
import Github from "../components/technologies/Github";
import Html from "../components/technologies/HTML";
import JavaScript from "../components/technologies/Javascript";
import MongoDB from "../components/technologies/MongoDB";
import Motion from "../components/technologies/Motion";
import NodeJs from "../components/technologies/NodeJS";
import IconReact from "../components/technologies/ReactIcon";
import TailwindCss from "../components/technologies/TailwindCSS";
import { Experience } from "../types/experience";

const experiences:Experience[] = [
        {
            company:"Uptoskills",
            position:"ReactJS Intern",
            startDate:"March 2026",
            endDate:"present",
            location:"Bengaluru, India (remote)",
            isCurrent:true,
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
                    name:"motion",
                    href:'',
                    icon:<Motion/>
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
                {
                    name:"Github",
                    href:'',
                    icon:<Github/>
                }
            ],
            website:'https://uptoskills.com/',
            discription:[
                "Contributed as a ReactJS Intern on a live AI Resume Builder project with 800+ commits, collaborating with a team of interns in an agile environment.",
                "Enhanced user experience by improving sidebar animations and fixing UI inconsistencies across multiple resume templates.",
                "Identified and resolved issues in predefined templates, including removal of incorrect default Social IDs and improving overall template accuracy.",
                "Actively participated in daily team meetings, sharing ideas, providing feedback, and contributing to continuous product improvement."
            ]
        },
        {
            company:"HCL (Guvi)",
            position:"Full Stack Developement Intern",
            startDate:"June 2025",
            endDate:"September 2025",
            location:"Chennai, India (remote)",
            isCurrent:false,
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
                    href:"",
                    icon:<JavaScript/>
                },
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
                    name:"motion",
                    href:'',
                    icon:<Motion/>
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
                }
            ],
            website:'https://www.guvi.in/',
            discription:[
                "Worked on building full-stack web applications , including Imagify (an image editing platform) and a Portfolio Builder for personal branding.",
                "Gained hands-on experience in ReactJs, NodeJs, ExpressJs, MongoDB, and Cloud services, implementing features from scratch.",
                "Collaborated in a guided project environment, following professional software development workflows and best practices.",
                "Focused on enhancing UI/UX design, responsive layouts , and real-world project deployment experience."
            ]
        }
    ]

export default experiences;