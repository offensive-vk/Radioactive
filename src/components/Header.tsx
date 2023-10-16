import React from 'react';
import logo from '../assets/logo.jpg';

function Header() {
    return (
        <header>
            <div className="logo">{logo}</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#author">Author</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#codes">Codes</a></li>
                </ul>
            </nav>
            {/* <div className="theme-switcher">
                <input type="checkbox" id="theme-toggle" />
                <label htmlFor="theme-toggle"></label>
            </div> */}
        </header>
    );
}

export default Header;
