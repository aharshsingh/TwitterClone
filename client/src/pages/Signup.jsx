import React, { useState } from 'react';
import axios from 'axios';
import '../css/Signup.css';  // Import the CSS file

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        userName,
        email,
        password,
      });
      if (response.status === 200) {
        setMessage('Sign-up successful!');
      } else {
        setMessage('Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      setMessage('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2 style={{color: "white"}}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{color: "white"}}>Username</label>
          <input
            style={{color: "white"}}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{color: "white"}}>Email</label>
          <input 
            style={{color: "white"}}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{color: "white"}}>Password</label>
          <input
            style={{color: "white"}}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
