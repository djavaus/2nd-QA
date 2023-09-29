import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
       <nav className="header__nav">
        <div className="container">
        <div className="header__wrapper">
        <NavLink to="/" className="header__link">Home</NavLink>
        <NavLink to="/blog" className="header__link">Blog</NavLink>
        <NavLink to="/work" className="header__link">Work</NavLink>
        
        </div>
        </div>
       </nav>
    )
}

export default Header