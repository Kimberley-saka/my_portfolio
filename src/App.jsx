import './App.css'
import AboutMe from './Components/AboutMe';
import GIS from './Components/GIS';
import Landing from './Pages/Landing'
import Software from './Components/Software';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  

  return (
    <div className="flex flex-col">
    <Landing/>
    <AboutMe/>
    <Skills/>
    <GIS/>
    <Software/>
    <Contact/>

    </div>
  )
}

export default App;
