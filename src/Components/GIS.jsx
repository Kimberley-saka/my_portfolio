import { motion } from "motion/react";
import Card from "./Card";

function GIS() {

  const projects = [
    {
      projectTitle: "GIS project 1",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },
    {
      projectTitle: "GIS project 2",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },
    {
      projectTitle: "GIS project 3",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
  ];
  return (
    <div className="flex flex-col text-dark-blue  bg-light-orange md:px-10 md:h-150">
      <h1 className="text-4xl md:text-5xl md:pt-10">
      A few of my GIS projects</h1>

      <div className="flex flex-col justify-center items-center h-full md:gap-20 md:flex-row">
       {projects.map((project, index) => 
      
      <Card 
      key={index} 
      projectTitle={project.projectTitle}
      projectDescription={project.projectDescription}/>
      )}

        </div>
      </div>
    )
}


export default GIS;