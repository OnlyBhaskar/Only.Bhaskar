import { div, span } from "framer-motion/client";
import ecom from '../assets/ecom.jpeg'
import SocialApp from "../assets/SocialApp.jpeg";

import { motion } from "framer-motion";

const projectData = [
  {
    image: SocialApp,
    title: "Social App",
    description: "",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    image: ecom,
    title: "Habit Tracker",
    description:
      "Launched a full-stack E-Commerce platform leveraging React.js, Redux Toolkit, and Tailwind CSS, featuring a seamless shopping cart experience and responsive UI. Implemented RESTful API integrations to manage dynamic product data and optimized frontend performance for faster load times ",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
    initial= {{opacity:0}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.5}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ Project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
      <img src={Project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-5  ">
        <div className="flex flex-col gap-3 ">
          <div className=" text-xl font-semibold ">{Project.title}</div>
          <p className="text-gray-400">{Project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5  ">
          {
            Project.technologies.map((tech,index)=>(
            <span key={index} className="rounded-lg bg-black p-3 ">
              {tech}
            </span>))
          }
        </div>
      </div>
    </div>

  </ScrollReveal>
  );
};


function Project() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectData.map((Project,index)=>(
            <ProjectCard key={index} Project={Project}/>
          ))
        }
      </div>
    </div> 
  );
}

export default Project;
