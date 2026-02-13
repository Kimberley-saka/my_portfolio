import AnimatedButton from "./AnimatedButton";

function GIS() {
    return (
        <div className="flex flex-col text-dark-blue md:h-150 bg-light-orange ">
            <h1 className="text-4xl md:text-5xl md:ml-20 pt-10">
              GIS projects</h1>
            <div>

            </div>

            <div className="flex flex-col gap md:gap-20 md:flex-row">
                <div>
                    <h2 className="text-2xl md:text-4xl md:ml-20 pt-10">GIS Project 1</h2>
                    <p className="text-lg md:text-2xl md:ml-20 pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <AnimatedButton link="#" className="text-dark-blue">
                            View project
                            </AnimatedButton>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl md:ml-20 pt-10">GIS Project 2</h2>
                    <p className="text-lg md:text-2xl md:ml-20 pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </div>


                <div>
                    <h2 className="text-2xl md:text-3xl md:ml-20 pt-10">GIS Project 3</h2> 
                    <p className="text-lg md:ml-20 pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>  
                </div>


            </div>
        </div>
    )
}


export default GIS;