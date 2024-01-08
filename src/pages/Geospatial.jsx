import { Link } from "react-router-dom"


function Geospatial() {
  return (
    <div className=" flex flex-col md:mx-28 md:my-16 text-lg">
        <div>
            Explore my <span className="text-teal-600">Geographic Information 
            Systems(GIS)</span> related work
        </div>

        <div className="grid grid-flow-col grid-cols-3 mt-6">
            <div className="flex flex-col h-80 w-80 px-4 rounded-xl bg-slate-400">
                <div className="text-3xl">
                    <p className="font-bold">GIS</p>
                    <p>Projects</p>
                </div>

                <Link to='#' className="flex justify-center items-center rounded-full mt-48 w-28 h-9 bg-slate-600">
                    Learn more 
                </Link>
            </div>

        </div>
      
    </div>
  )
}

export default Geospatial
