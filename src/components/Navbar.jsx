import React from "react";
import logo from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav--logo" src={logo}/>
            <p className="nav--title">ReactFacts</p>
            <p className="nav--subtitle">React Course - Project 1</p>
        </nav>
    )
}