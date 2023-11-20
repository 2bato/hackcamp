import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';
import hipgif1 from './hipstretches/bridging-exercise-gif.gif'
import hipgif2 from './hipstretches/hip-extension-gif.gif'
import hipgif3 from './hipstretches/double-hip-rotation-gif.gif'
import hipgif4 from './hipstretches/hip-flexion-gif.gif'

const hip = () => {
  return (
    <>
    <Header />
    <BackButton />
    <div className="container">
      <div className="image-side">
        <img className="hipgif1" src={hipgif1} alt="stretch1" />
      </div>
      <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
    </div>

    <div className="container">
    <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
      <div className="image-side">
        <img className="hipgif2" src={hipgif2} alt="stretch1" />
      </div>
    </div>
    <div>

    <div className="container">
      <div className="image-side">
        <img className="hipgif3" src={hipgif3} alt="hipgif3" />
      </div>
      <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
    </div>

    <div className="container">
    <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
      <div className="image-side">
        <img className="hipgif4" src={hipgif4} alt="stretch1" />
      </div>
    </div>


   
    </div>
    </>

  );
};

export default hip;