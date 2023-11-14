import NavBar from "./components/Navigation/NavBar";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/Projects";
import GeospatialProducts from "./pages/Geospatial";
import ContactPage from "./pages/Contact";

export default function App() {
  return(
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/about" element={<AboutPage/>} ></Route>
        <Route path="/projects" element={<ProjectsPage/>} ></Route>
        <Route path="/geospatial" element={<GeospatialProducts/>} ></Route>
        <Route path="/contact" element={<ContactPage/>} ></Route>
      </Routes>
    </div>
  )
}
