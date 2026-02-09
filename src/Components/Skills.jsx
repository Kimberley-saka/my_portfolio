import { Languages } from "@hugeicons/core-free-icons";

const languages = ["Python", "JavaScript", "HTML", "CSS", "SQL"];

const technologies = ["ArcGIS Pro", "QGIS", "PostGIS", "PostgreSQL", "React", "Django", "FastAPI", "Git"];


function Skills() {
  return(
    <div className="flex flex-col  bg-dark-blue md:flex-row justify-center items-center
    text-light-orange font-light p-8 h-86 gap-5">
      
       <div className="w-full md:w-1/2">
          <h1 className="text-orange-ish text-2xl md:text-4xl">
          Languages
        </h1>
        <ul className="list-none md:text-lg flex flex-row flex-wrap gap-5 mt-4">
          {languages.map(lang => (
            <li className="flex items-center justify-center h-12"
            key={lang}>{lang}</li>
          ))}
        </ul>

      </div>


      <div className="">
          <h1 className="text-orange-ish text-2xl md:text-4xl">
          Technologies
        </h1>
        <ul className="list-none flex flex-row flex-wrap gap-6 mt-4 md:text-lg">
          {technologies.map(tech => (
            <li className="flex items-center justify-center rounded-md"
            key={tech}>{tech}</li>
          ))}
        </ul>

      </div>

    </div>
  )

}

export default Skills;