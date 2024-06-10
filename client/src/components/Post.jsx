import React, { useState } from 'react';
import axios from 'axios';
import '../css/Post.css';

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
      console.log('Tweet sent:', response.data);
    } catch (error) {
      setError('Error sending tweet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tweet-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={tweet}
          onChange={handleChange}
          placeholder="What's happening?"
          rows="4"
          cols="50"
        />
        <input
          type="file"
          multiple
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Tweet'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Post;
