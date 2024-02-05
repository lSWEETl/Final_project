import { Link, useMatch, useResolvedPath } from "react-router-dom"

import MyLogo from "./images/Logo .png"

export default function Navbar (){
    return <nav className="nav">
        <Link to="/" className="Logo"><img src={MyLogo} alt="Teste"/></Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/menu">Menu</CustomLink>
            <CustomLink to="/reservations">Reservations</CustomLink>
            <CustomLink to="/orderonline">Order Online</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
        </ul>
    </nav>
}

function CustomLink ({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li  className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}