import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'
import '../css/Profile.css';
import UserFeed from '../components/UserFeed';
const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div style={{display:'flex'}}>
    <div style={{marginLeft:'600px'}}>
    <NavBar/>
    </div>
    <div>
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-info">
        {userInfo ? (
          <>
            <div className="profile-avatar">
              <img src={userInfo.avatar} alt="User Avatar" />
            </div>
            <div className="profile-details">
              <h2>{userInfo.name}</h2>
              <p>@{userInfo.username}</p>
              <p>{userInfo.bio}</p>
              <p>Date of Birth: {userInfo.dob}</p>
              <p>Followers: {userInfo.followers}</p>
              <p>Following: {userInfo.following}</p>
            </div>
          </>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    </div>
    <UserFeed/>
    </div>    
    </div>
  );
};

export default UserProfilePage;
