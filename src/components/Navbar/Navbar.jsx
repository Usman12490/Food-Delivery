import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginPopup/LoginPopup'

const Navbar = () => {
    const [menu, setMenu] = useState("menu")
    const [showForm, setShowForm] = useState(false) // Add state for form visibility
    const { isDarkMode, toggleDarkMode } = useContext(StoreContext)
    const { getTotalCartAmount } = useContext(StoreContext);

    // Function to handle sign in button click
    const handleSignInClick = () => {
        setShowForm(true)
    }

    // Function to close the form
    const handleCloseForm = () => {
        setShowForm(false)
    }

    return (
        <>
            <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
                <Link to='/'> <img src={assets.logo} alt="" className="logo" /> </Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search-icon">
                        <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {/* Dark Mode Toggle Button */}
                    <button
                        className="dark-mode-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <button onClick={handleSignInClick}>Sign In</button>
                </div>
            </div>

            {/* Popup Form */}
            {showForm && (
                <div className="popup-overlay" onClick={handleCloseForm}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseForm}>
                            ×
                        </button>
                        <LoginForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar