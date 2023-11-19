import React from 'react';
import './stretches.css'; // Make sure to create a corresponding CSS file with your styles
import logo from "../logo.svg"
import Header from '../components/header';
import BackButton from '../components/BackButton';

const Portfolio = () => {
  return (
    <> 
    <Header />
    <BackButton />
    <div className="container">
      <div className="image-side">
        <img src={logo} alt="Travel Photography" />
      </div>
      <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
    </div>
    </>
  );
};

export default Portfolio;