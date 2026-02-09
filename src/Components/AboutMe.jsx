import { motion, scale } from "motion/react";




function AboutMe(){
  return(
    <div className="flex flex-col gap-10  bg-light-orange text-dark-blue
    font-light p-8 md:p-14 md:flex-row md:h-110">
      <div className="text-4xl w-full  text-orange-ish font-bold md:w-1/3 md:text-6xl">
          About me
      </div>

      <div className="flex flex-col justify-center items-center  w-full md:w-1/2 md:gap-10 ">
       <p className="text-lg md:text-xl">
         I&apos;m a Geospatial Analyst who has a bachelor&apos;s in Geo-information 
        and Earth Observation Science. I love working at the intersection of location
        intelligence, satellite data and code. I find real joy in the process of 
        coding and creating something functional from scratch. When I&apos;m not deep
        in code or exploring new datasets, you&apos;ll usually find me outdoors gardening, 
        reading sci-fi or fantasy novels. 
        Always happy to connect over interesting ideas or potential collaborations, feel free to reach out!

       </p>
       <motion.button 
       whileHover={{scale: 1.05, y: -2}}
       whileTap={{scale: 0.9, y: 1}}
       transition={{type:"spring", stiffness: 300, damping: 15}}
       className="border-2 border-orange-ish h-12 w-58
        text-orange-ish font-semibold rounded-md mt-5 md:mt-0 md:h-12 md:w-96">
        Work with me
       </motion.button>
       
          
      </div>
    </div>
    )
}

export default AboutMe;