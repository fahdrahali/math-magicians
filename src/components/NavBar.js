import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <h1>Math Magicians</h1>
    <ul className="nav-link">
      <Link to="/">
        <li>Home </li>
      </Link>
      <li>|</li>
      <Link to="/calculator">
        <li>Calculator</li>
      </Link>

      <li>|</li>

      <Link to="/quote">
        <li>Quote</li>
      </Link>
    </ul>
  </div>
);

export default NavBar;
