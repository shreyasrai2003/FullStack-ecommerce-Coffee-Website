import React from 'react';
import './AboutMe.css';
import myImage from '../Assets/me.png';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="image-container">
        <h2 className="title">Dev Noobie</h2>
        <img src={myImage} alt=''/>
      </div>
      <p className="description">Aspiring Full Stack Developer and part-time comedian trying out the latest MERN Stack features. When I'm not debugging, you can find me perfecting my stand-up routine with JavaScript puns.</p>
      <p className="fun-fact">Fun Fact: I once tried to teach my computer how to dance, but it kept doing the robot!</p>
    </div>
  );
}

export default AboutMe;
