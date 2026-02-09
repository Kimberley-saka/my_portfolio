function AboutMe(){
  return(
    <div className="flex flex-col gap-10 md:h-120 bg-light-orange text-dark-blue
    font-light p-8 md:p-20 md:flex-row">
      <div className="text-4xl w-full md:text-6xl text-orange-ish font-bold md:w-1/3">
          About me
      </div>

      <div className="flex justify center items-center  text-lg w-full md:w-1/2 md:text-xl">
        I&apos;m a Geospatial Analyst who has a bachelor&apos;s in Geo-information 
        and Earth Observation Science. I love working at the intersection of location
        intelligence, satellite data and code. I find real joy in the process of 
        coding and creating something functional from scratch. When I&apos;m not deep
        in code or exploring new datasets, you&apos;ll usually find me outdoors gardening, 
        reading sci-fi or fantasy novels. 
        Always happy to connect over interesting ideas or potential collaborations, feel free to reach out!
          
      </div>
    </div>
    )
}

export default AboutMe;