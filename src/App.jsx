import NavBar from "./components/Navigation/NavBar";
import Projects from "./components/Projects";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return(
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/projects" element={<Projects/>} ></Route>
      </Routes>
    </div>
  )
}
