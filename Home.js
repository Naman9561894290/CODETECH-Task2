import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Chat App</h1>
      <Link to="/chat">Go to Chat</Link>
    </div>
  );
};

export default Home;
