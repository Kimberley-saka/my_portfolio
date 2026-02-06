import GetInTouch from "./GetInTouch";

function HeroSection() {
    return(
        <div className="flex flex-col gap-14 text-white h-full justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Hello I'm Kimberley, a Geospatial Analyst who also loves to code backend software
        </h1>
        <div>
          <GetInTouch/>
        </div>
        

        </div>
    )
}

export default HeroSection;