import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import Feed from '../components/Feed'
import '../css/Home.css'
import TopNavbar from '../components/TopNavbar'
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const { email } = location.state || {};
  // const [userData, setUserData] = useState(null);
  return (
    <>
    <div style={{width: "40px", height: "40px", marginLeft: "430px"}}>
    <TopNavbar/>
    </div>
    <div style={{display:'flex', columnGap:'30px'}}>
      <div style={{marginLeft:'400px'}}>
        <NavBar/>
        </div>
        <div>
            <div className='feedContainer'>
              <Post/>
            </div>
            <div className='feedContainer1'>
              <Feed/>
            </div>
      </div>
    </div>
    </>
  )
}
