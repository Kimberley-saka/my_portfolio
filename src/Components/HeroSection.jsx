import GetInTouch from "./GetInTouch";

function HeroSection() {
    return(
        <div className="flex flex-col gap-5 px-3 text-white h-1/2 justify-center items-center 
        md:gap-14 md:px-5 md:h-full">
        <h1 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold md:text-center">
            Hello I'm Kimberley, a Geospatial Analyst who also loves to code backend software
        </h1>
        <div>
          <GetInTouch/>
        </div>
        

        </div>
    )
}

export default HeroSection;