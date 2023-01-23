import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Footer.css";


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <ul>
                        <li className='nav-item'>
                            <HashLink to="/#top">Home</HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to="/#about">About</HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink to="/#projects">Projects</HashLink>
                        </li>
                    </ul>
                    <div className='bottom'>
                        <span className='line-center'></span>
                        <p>Marius Müller, 2023. All rights reserved</p>
                        <ul>
                            <li className='nav-item'>
                                <HashLink to="/impressum#top">Impressum</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink to="/privacy#top">Privacy</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer