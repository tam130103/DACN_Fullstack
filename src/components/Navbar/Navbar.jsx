// src/components/Navbar/Navbar.jsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('menu');
    const { getTotalCartAmount } = useContext(StoreContext);

    const menuItems = [
        { name: "home", label: "Home", path: "/" },
        { name: "menu", label: "Menu", path: "/menu" },
        { name: "mobile-app", label: "Mobile app", path: "/mobile-app" },
        { name: "contact", label: "Contact", path: "/contact" },
    ];

    return (
        <div className='navbar'>
            {/* Logo dẫn về trang chủ */}
            <Link to="/" onClick={() => setMenu('home')}>
                <img src={assets.logo} alt="Logo" className="logo" />
            </Link>
            <ul className="navbar-menu">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={menu === item.name ? "active" : ""}
                        onClick={() => setMenu(item.name)}
                    >
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search_icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Basket" />
                    </Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => setShowLogin && setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
