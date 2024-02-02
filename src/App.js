import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Orderonline from "./pages/Orderonline"
import Reservations from "./pages/Reservations"


function App() {
  let Component
  switch (window.location.pathname) {
    case "/home":
      Component = <Home />
      break
    case "/about":
      Component = <About />
      break
    case "/login":
      Component = <Login />
      break
    case "/menu":
      Component = <Menu />
      break
    case "/orderonline":
      Component = <Orderonline />
      break
    case "/login":
      Component = <Login />
      break
    case "/reservations":
      Component = <Reservations />
      break
  }
  return (
  <>
  <Navbar />
  {Component}
  </>
  )
}

export default App;
