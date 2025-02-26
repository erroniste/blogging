import React from 'react';
import '../hero.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Welcome to Hackathon</h1>
        <p>Join us in an exciting event where creativity and innovation collide!</p>
        <a href="#join" className="button">Join Now</a>
      </div>
    </section>
  );
};

export default Hero;