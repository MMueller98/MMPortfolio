import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo_neu.png";
import "../styles/NavBar.css";

const NavBar = () => {

    // onClick Listener for toggle hamburger menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: "#ffffff"}}/>) : (<FaBars size={30} style={{ color: "#ffffff" }} />)}
                    
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#top'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects'>Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
