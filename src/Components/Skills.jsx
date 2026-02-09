import { Languages } from "@hugeicons/core-free-icons";

const languages = ["Python", "JavaScript", "HTML", "CSS", "SQL"];

const technologies = ["ArcGIS Pro", "QGIS", "PostGIS","React", "Django", "FastAPI", "Git"];


function Skills() {
  return(
    <div className="flex flex-col  bg-dark-blue md:flex-row justify-center items-center
    text-light-orange font-light p-8  md:h-120 gap-5">
      
       <div className="md:w-1/3 bg-blue-400">
          <h1 className="text-orange-ish text-2xl md:text-4xl">
          Languages
        </h1>
        <ul className="list-inside  flex flex-row flex-wrap gap-6 mt-4">
          {languages.map(lang => (
            <li className="flex "
            key={lang}>{lang}</li>
          ))}
        </ul>

      </div>


      <div className="md:w-1/3 bg-amber-100">
          <h1 className="text-orange-ish text-2xl md:text-4xl bg-amber-100">
          Technologies
        </h1>
        <ul className="list-inside  flex flex-row flex-wrap gap-6 mt-4">
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