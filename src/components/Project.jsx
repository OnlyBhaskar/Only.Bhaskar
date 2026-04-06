import { div, span } from "framer-motion/client";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

import { motion } from "framer-motion";

const projectData = [
  {
    image: image1,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae neque dolorem rerum architecto ipsam dolores enim exercitationem placeat voluptate, rem qui atque,",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    image: image2,
    title: "Habit Tracker2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae neque dolorem rerum architecto ipsam dolores enim exercitationem placeat voluptate, rem qui atque,",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    image: image3,
    title: "Habit Tracker3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae neque dolorem rerum architecto ipsam dolores enim exercitationem placeat voluptate, rem qui atque, ",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    image: image4,
    title: "Habit Tracker4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae neque dolorem rerum architecto ipsam dolores enim exercitationem placeat voluptate, rem qui atque,",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    image: image5,
    title: "Habit Tracker",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae neque dolorem rerum architecto ipsam dolores enim exercitationem placeat voluptate, rem qui atque, ",
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
