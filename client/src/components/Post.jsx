import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../css/Post.css';
import Submit from '../components/Submit'
import userImg from '../public/WhatsApp Image 2024-05-09 at 22.45.39_fda983ee-Photoroom.png-Photoroom.png'
const Post = () => {
  const [tweet, setTweet] = useState('');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('tweet', tweet);
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/tweets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log('Tweet sent:', response.data);
    } catch (error) {
      setError('Error sending tweet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tweet-form">
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex", columnGap:"10px", borderBottom:"1px rgb(194, 194, 194) solid"}}>
          <Link to='/profile'><img style={{marginTop:"-10px",width:"50px", height:"50px", borderRadius:"100%"}} src={userImg} alt='user Img'/></Link>
          <textarea value={tweet} onChange={handleChange} placeholder="What is happening?!" rows="4" cols="50"/>
        </div>
        <input className='chooseFile' type="file" multiple accept="image/*, video/*" onChange={handleFileChange}/>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Tweet'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {/* <Submit/> */}
    </div>
  );
};

export default Post;
