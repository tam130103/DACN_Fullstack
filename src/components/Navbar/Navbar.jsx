// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className="logo" />
            <ul className="navbar-menu">
                <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
                <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
                <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile app</li>
                <li className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search_icon">
                    <img src={assets.basket_icon} alt="Basket" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
