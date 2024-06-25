import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'
import '../css/Profile.css';
import UserFeed from '../components/UserFeed';
import TopNavbar from '../components/TopNavbar'
import profileImg from '../public/WhatsApp Image 2024-05-09 at 22.45.39_fda983ee-Photoroom.png-Photoroom.png'
import coverImg from '../public/IMG_20210612_192620.jpg';
import {Link, useParams} from 'react-router-dom'
import calenderImg from '../public/calendar-days-solid.svg';
const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/userProfile/666be2deb27b6f6db1f5711d`);
        setUserInfo(response.data);
        console.log(userInfo);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  return (
  <>
    <div style={{width: "40px", height: "40px", marginLeft: "430px"}}>
      <TopNavbar/>
    </div>
    <div style={{display:'flex', columnGap: "30px"}}>
    <div style={{marginLeft:'400px'}}>
    <NavBar/>
    </div>
    <div>
    <div className="profile-container">
        <div className="cover-container">
            <img className="cover-image" src={coverImg} alt="usercover" />
            <img className="profile-image" src={profileImg} alt="userprofile" />
        </div>
        <Link to='/EditProfile'><button className="editProfileButton">Edit Profile</button></Link>
        <h2>Aharsh Singh</h2>
        <h3>@aharshsingh25</h3>
        <h4>this is bio</h4>
        <div style={{display:"flex"}}>
          <img className="calendarImg" src={calenderImg} alt='calenderImg' />
          <h3 style={{color:"#8F8F8F", marginTop:"-2px",}}>Joined January 2021</h3>
        </div>
        <div style={{display:"flex", columnGap:"25px"}}>
            <p style = {{color:"white", fontWeight:"100", marginTop:"-5px", marginLeft:"15px", color:"#8F8F8F"}}>32 Following</p>
            <p style = {{color:"white", fontWeight:"100", marginTop:"-5px", color:"#8F8F8F"}}>5 Followers</p>
        </div>
    </div>
    <UserFeed/>
    </div>    
    </div>
    </>
  );
};

export default UserProfilePage;
