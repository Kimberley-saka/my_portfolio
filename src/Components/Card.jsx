function Card(
  {
    projectTittle,
    projectDescription,
  }
) {
  return (
    <div className="flex flex-col items-start gap-7">
  
            <h2 className="text-2xl md:text-3xl pt-10 font-bold">{projectTittle}</h2>
            <p className="text-lg md:text-xl">
              {projectDescription}</p>
            
            <div className="w-full flex justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2}}
                whileTap={{scale:0.9, y: 1}}
                transition={{type:"spring", stiffness: 300, damping: 15}}
                id="#"
                className="text-light-orange bg-dark-blue w-50 h-10 rounded-md"
                >
                  View project
              </motion.button>
            
            </div>
         
        </div>
  )
}

export default Card;