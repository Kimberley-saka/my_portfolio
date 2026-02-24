//Software projects page
import Card from "./Card";


function Software() {

  const projects = [
    {
      projectTitle: "project 1",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },
    {
      projectTitle: "project 2",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },
    {
      projectTitle: "project 3",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
  ];
  return (
    <div className="flex flex-col text-dark-blue  bg-light-orange md:px-10 md:h-150">
      <h1 className="text-4xl md:text-5xl md:pt-10">
       Software projects</h1>

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

export default Software;