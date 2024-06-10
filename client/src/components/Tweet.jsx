import React from 'react';
import '../css/Tweet.css'
const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img src={tweet.user.profileImage} alt={tweet.user.username} className="profile-image" />
        <div className="user-info">
          <h3>{tweet.user.username}</h3>
          <p>@{tweet.user.handle}</p>
        </div>
      </div>
      <p className="tweet-content">{tweet.content}</p>
      <div className="tweet-footer">
        <p>{tweet.likes} Likes</p>
        <p>{tweet.retweets} Retweets</p>
      </div>
    </div>
  );
};

export default Tweet;
