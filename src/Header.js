import React from "react"
import Photo1 from "./images/Photo1.jpg"

export default function Header() {
    return (
    <header>
    <div className="exemplo1" style={{backgroundColor: "#2f4f4f", padding: "1em 22em"}}>
    <h1 style= {{color: "#daa520"}}>Little Lemon</h1>
    <h2 style= {{color: "white"}}>Chicago</h2>
    <p style= {{color: "white"}}>We are a family owned <br />
                                Mediterranean restaurant, <br />
                                focused on traditional <br />
                                recipes served with a moder <br />
                                twist.</p>
    <button style={{
        backgroundColor: "#daa520",
        color:"#2f4f4f",
        fontSize:"15px",
        borderRadius:"10px",
        padding: "0.80rem"}}>Reserve a Table
    </button>
    <img src={Photo1} alt="waiter"
    style={{width: 300,
            height: 360,
            borderRadius: '2rem',
            position: "absolute",
            top: "42%",
            right: "15%",
            transform: "translate(-50%, -50%)"}}/>
    </div>
    </header>
    )
}

