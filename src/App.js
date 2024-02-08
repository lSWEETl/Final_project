import Navbar from "./Navbar"
import About from "./pages/About"
import Header from "./pages/Header"
import Login from "./pages/Login"
import Main from "./pages/Main"
import Menu from "./pages/Menu"
import Orderonline from "./pages/Orderonline"
import Reservations from "./pages/Reservations"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/orderonline" element={<Orderonline />} />
    <Route path="/reservations" element={<Reservations />} />
  </Routes>
  <Main />
  </>
  )
}

export default App;
