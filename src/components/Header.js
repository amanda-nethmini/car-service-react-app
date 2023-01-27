import React from "react";
import "../styles/Header.css";
import image from "../images/image.png"

function Header() {
    return(
        <div>
            <div>
                <img src={image} className="header-image"/>
                <h1 className="header-h1">GREEN AUTO REPAIR (PVT) LTD</h1>
            </div>
            <br/>
            <ul className="navigation">
                <li><a href="/">Home</a></li>
                <li><a href="/allservices">Services</a></li>
                <li><a href="/experts">Experts</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Header;