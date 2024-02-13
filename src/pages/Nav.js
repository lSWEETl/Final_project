import React, { useState } from "react";
import Logo from "../images/Logo .png";
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return(
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={Logo} alt="logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <CustomLink to="./">Home</CustomLink>
            <CustomLink to="./About">About</CustomLink>
            <CustomLink to="./Menu">Menu</CustomLink>
            <CustomLink to="./Reservations">Reservations</CustomLink>
            <CustomLink to="./Orderonline">Order Online</CustomLink>
            <CustomLink to="./Login">Login</CustomLink>
            </ul>

        </nav>
    )

    function CustomLink ({ to, children, ...props}){
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li  className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }
}


export default Nav;