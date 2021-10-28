import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./../../assets/x.svg";
import { ReactComponent as MenuIcon } from "./../../assets/menu.svg";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { useSelector } from 'react-redux';
import "./header.css";


const Test = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const zip = useSelector(state => state.zip);
  const county = useSelector(state => state.county);

  return (
    <div className="header">
      <div className="logo-nav">
        
        {/*<div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>*/}

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">New Cars</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">Used Cars</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">Financing</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">Sell My Car</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">About Us</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#" className="aNav">Login/Signup</a>
          </li>
          {/*<li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>*/}
        </ul>
      </div>
      {/*<ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
        </ul>*/}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Test;