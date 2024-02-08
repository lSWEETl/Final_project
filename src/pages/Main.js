import React from "react"
import HeadlineCards from "./HeadlineCards"

export default function Main() {
    return (
        <main>
            <h1>This Weeks Specials!</h1>
            <button style={{
            backgroundColor: "#daa520",
            color:"#2f4f4f",
            fontSize:"15px",
            borderRadius:"10px",
            padding: "0.80rem"}}>Online Menu
            </button>

        <div>
            <HeadlineCards />
        </div>


        </main>
)}