import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import homeImage from '../public/house-solid (1).svg';
import userImage from '../public/user-solid (2).svg'
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
        <Link to="/" className='LinkHome'><li><div style={{display: "flex"}}><img style={{width: "30px", height:"30px"}} src={homeImage} alt='click to home'/><p>Home</p></div></li></Link>
        <Link to="/profile" className='LinkHome'><li><div style={{display: "flex"}}><img style={{width: "30px", height:"30px"}} src={userImage} alt='click to home'/><p>Profile</p></div></li></Link>
      </ul>
      <div style={{marginTop: "25px"}}>
        <Link to="/post"><button className="post-button">POST</button></Link><br/><br/><br/>
        <Link to="/logout"><button className="logout-button">LOGOUT</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
