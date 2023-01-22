import React from 'react'
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
            <div className='container'>
                <ul>
                <li className='nav-item'>
                        <a href='/'>Home</a>
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
                        <a href='/'>Impressum</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Privacy</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
  )
}

export default Footer