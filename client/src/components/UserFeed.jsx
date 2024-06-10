import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tweet from '../components/Tweet'; 

const Feed = ({ userId }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`/api/feed/${userId}`); 
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, [userId]);

  return (
    <div>
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
