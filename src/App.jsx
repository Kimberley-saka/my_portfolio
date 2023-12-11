import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  return(
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/projects" element={<Projects/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
      </Routes>
    </div>
  )
}
