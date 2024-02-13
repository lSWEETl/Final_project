import React from "react"
import { Link } from "react-router-dom"
import Photo1 from "../images/Photo1.jpg"

export default function Header() {
    return (
    <header className ="header">
        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p >We are very proud about our traditional recipes! <br></br>Come and try it!</p>
                <Link to="/Reservations"><button aria-label="On Click">Reserve a Table</button></Link>
            </div>
            <div className="banner-img">
                <img src={Photo1} alt="w"/>
            </div>
        </section>
    </header>
    )
}

