import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css'
import Resume from './Resume';
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to Home route */}
          </li>
          <li>
            <Link to="/Resume">resume</Link> {/* Link to About route */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Link to Contact route */}
          </li>
          <li>
            <Link to="/bye">Goodbye</Link> {/* Link to Goodbye route */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
