import "./Header.css";
import logo from "../img/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => { 
    return (  
      <>
        <header className="header">
          <div className="header-logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className="header-content">
            <div className="header-logIn">              
              < Link to="/login">Регистрация</Link>
            </div>
            <div className="header-enter">
              <Link to="/enter">Войти</Link>
            </div>
          </div>          
        </header>        
      </>  
    )
}

export default Header