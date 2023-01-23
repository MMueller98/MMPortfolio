import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Footer.css";


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <span className='line-center'></span>
                    <p>Marius Müller, 2023. All rights reserved</p>
                    <div className="table">
                        <ul>
                            <li className='nav-item'>
                                <HashLink to="/impressum#top">Impressum</HashLink>
                            </li>
                            <li className='nav-item ms-0'>
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