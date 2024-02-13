import Home from "./pages/Home"
import Nav from "./pages/Nav"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Reservations from "./pages/Reservations"
import Orderonline from "./pages/Orderonline"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
  <>
  <Nav />
  <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Orderonline" element={<Orderonline />} />
          <Route path="/Login" element={<Login />} />
  </Routes>
  </>
  )
}

export default App;
