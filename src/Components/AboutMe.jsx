function AboutMe(){
    return(
        <div className="flex flex-row gap-10 md:h-120 bg-light-orange text-dark-blue font-light p-10 md:p-20 ">
            <div className="text-3xl md:text-6xl text-orange-ish font-bold">
                Who is Kimberley?
            </div>

            <div className="flex justify center items-center w-1/2 text-xl">
                I&apos;m a Geospatial Analyst who has a bachelor &apos; s in Geo-information and Earth Observation Science. 
                I love working at the intersection of location intelligence, satellite data and code. 
                Whether I&apos;m writing scripts to process remote sensing imagery or building full software solutions, 
                I find real joy in the process of coding and creating something functional from scratch. 
                When I&apos;m not deep in code or exploring new datasets, you&apos;ll usually find me outdoors gardening, 
                reading sci-fi or fantasy novels and holding a solo dance party dancing to my favourite music. 
                Always happy to connect over interesting ideas or potential collaborations, feel free to reach out!
                
            </div>
        </div>
    )
}

export default AboutMe;