import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Orderonline from "./pages/Orderonline"
import Reservations from "./pages/Reservations"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/orderonline" element={<Orderonline />} />
    <Route path="/reservations" element={<Reservations />} />
  </Routes>
  </>
  )
}

export default App;
