import React from 'react'
import './nav.css'

const navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='logo'>
                <h2>Navbar</h2>
            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
