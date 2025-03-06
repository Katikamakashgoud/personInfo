import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
       
        <li>
          <Link to="/register" className="register-button">Sign in</Link> {/* Added Register */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
