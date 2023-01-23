import React, { useState } from "react";
import "../styles/Footer.css";


function Footer({setShowImpressum}) {
  return (
    <>
    <div className='footer'>
            <div className='container'>
                <ul>
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
                <div className='bottom'>
                    <span className='line-center'></span>
                    <p>Marius Müller, 2023. All rights reserved</p>
                    <ul>
                    <li className='nav-item'>
                        <a href='#about'>Impressum</a>
                    </li>
                    <li className='nav-item'>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Footer