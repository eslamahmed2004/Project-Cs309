import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <h1 className="name">TALBATK</h1>
        </div>
      <div className="navbar-links">
        <div>
          <Link to="./sginup">Sign Up</Link> 
        </div>
        <div>
          <Link to="./signin">sgin In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
