import React from "react";
import './navbar.css';
import logo from "../logo.svg"
function Nav(props) {
    const { baseURL, endpoint } = props
    console.log(logo);
    return (
        <div className="nav">
            <div className="Logo"><img id="logoPic" src={logo} /></div>
            <div className="Name">Name</div>
            <img src={logo} className="burger" />
            <div className="container">
                <button className="Home">Home</button>
                <button className="Contact">Contact</button>
            </div>
        </div>
    )

};

export default Nav;