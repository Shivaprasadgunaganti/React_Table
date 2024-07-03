import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function NavBar() {
  
  const linkStyle={
    textDecoration:'none'
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} style={linkStyle}>Home</NavLink>
          </li>

          <li className="nav-item">
          <NavLink to={'/about'} style={linkStyle}>About</NavLink>
          </li>

          <li className="nav-item">
          <NavLink to={'/contact'} style={linkStyle}>contact</NavLink>
          </li>

          <li className="nav-item">
          <NavLink to={'/setting'} style={linkStyle}>Setting</NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
