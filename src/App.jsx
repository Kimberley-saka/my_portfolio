import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return(
    <div className="mx-6">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
      </Routes>
    </div>
  )
}
