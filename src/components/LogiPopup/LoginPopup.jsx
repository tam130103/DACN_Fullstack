import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form 
                action="" 
                className="login-popup-container" 
                onSubmit={(e) => e.preventDefault()} // Ngăn tải lại trang
            >
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign up" && (
                        <input type="text" placeholder='Your name' required />
                    )}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>
                    {currState === "Sign up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>...</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create new account?{" "}
                        <span onClick={() => setCurrState("Sign up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>
                            Click here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
