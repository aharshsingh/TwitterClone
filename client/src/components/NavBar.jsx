import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* Uncomment and update the path if you have a logo */}
        {/* <Link to="/">
          <img src="/path/to/logo.png" alt="Twitter Logo" />
        </Link> */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="navbar-actions" >
        <Link to="/post" className="post-button">POST</Link><br/><br/><br/>
        <Link to="/logout" style={{backgroundColor: 'white', color: '#1DA1F2', marginLeft:'5px'}} className="logout-button">Logout</Link>
      </div>
    </div>
  );
};

export default NavBar;
