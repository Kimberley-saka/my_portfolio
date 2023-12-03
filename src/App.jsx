import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

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
