import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tweet from '../components/Tweet'; 
import '../css/Feed.css';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('/api/tweets'); 
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="feed">
      {tweets.length > 0 ? (
        <div>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      ) : (
        <p>No tweets to display.</p>
      )}
    </div>
  );
};

export default Feed;
