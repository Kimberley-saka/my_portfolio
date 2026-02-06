import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";

function Landing() {
    return(<div 
    className="bg-[url(/bg1.jpg)] bg-center bg-cover h-screen">
    <NavBar/>
    <HeroSection/>
    </div>
        
    )
}

export default Landing;