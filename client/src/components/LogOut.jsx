import React from 'react';
import axios from 'axios';
import '../css/LogOut.css';  

const Logout = () => {
  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, already logged out');
      return;
    }

    try {
      await axios.post('/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      console.log('Logout successful');

    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
