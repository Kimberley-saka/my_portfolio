import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/contact";
import Geospatial from "./pages/Geospatial";

export default function App() {
  return(
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/projects" element={<Projects/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/geospatial" element={<Geospatial/>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}
