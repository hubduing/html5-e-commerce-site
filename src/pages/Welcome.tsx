import React from 'react';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className="welcome">
      <h2>Welcome to my site</h2>
      <p>My name is Alexey and I am a beginner web developer</p>
      <button className="normal button"><Link to="/"><span>Go to home page</span></Link></button>
    </div>
  )
}
