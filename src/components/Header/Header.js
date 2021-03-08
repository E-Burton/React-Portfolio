import React from "react";

import logo from "../../logo.svg";
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Header() {
    return (
        <div className="navigation">
            <div className="navigation-sub">
                <Link to="/" className="item">About</Link>
                <Link to="/projects-page" className="item">Projects</Link>
                <Link to="/contact-page" className="item">Contact</Link>
            </div>
      </div>
    )
}

export default Header;