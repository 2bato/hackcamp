
import React from 'react';
import './stretches.css'; 
import kneegif1 from "./kneestretches/CalfRaises.webp";
import kneegif2 from "./kneestretches/HalfSquat.webp";
import kneegif3 from "./kneestretches/HipAbduction.webp";
import kneegif4 from "./kneestretches/StandingCalfStretch.webp";
import kneegif5 from "./kneestretches/StraightLegRaise.webp";
import kneegif6 from "./kneestretches/SupineHamstringStretch.webp";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';


const knee = () => {
    return (
      <>
    <Header />
    <BackButton />
    <div className="container">
      <div className="image-side">
        <img className="kneegif1" src={kneegif1} alt="stretch1" />
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
        <img className="kneegif2" src={kneegif2} alt="stretch1" />
      </div>
    </div>

      <div>
        <header className="exercise-header">
          
          <title>Hip Abduction</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={kneegif3} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={kneegif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      <div>
        <header className="exercise-header">
          
          <title>Standing Calf Stretch</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={kneegif4} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={kneegif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      <div>
        <header className="exercise-header">
          
          <title>Straight Leg Raise</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={kneegif5} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={kneegif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      <div>
        <header className="exercise-header">
          
          <title>Supine Hamstring Stretch</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={kneegif6} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={kneegif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      </>
  
    );
  };
  
  export default knee;
