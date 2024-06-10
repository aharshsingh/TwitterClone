import React from 'react'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import Feed from '../components/Feed'
export default function Home() {
  return (
    <div style={{display:'flex', columnGap:'50px'}}>
      <div style={{marginLeft:'450px'}}>
        <NavBar/>
        </div>
        <div>
            <div>
              <Post/>
            </div>
            <div>
              <Feed/>
            </div>
        </div>
    </div>
  )
}
