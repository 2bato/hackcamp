
import React from 'react';
import "../App.css";
import gif1 from "./kneestretches/CalfRaises.webp";
import gif2 from "./kneestretches/HalfSquat.webp";
import gif3 from "./kneestretches/HipAbduction.webp";
import gif4 from "./kneestretches/StandingCalfStretch.webp";
import gif5 from "./kneestretches/StraightLegRaise.webp";
import gif6 from "./kneestretches/SupineHamstringStretch.webp";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';

const knee = () => {
    return (
      <>
    <Header />
      <div>
        <header className="exercise-header">
          <title>Calf Raises</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img className="gif1" src={gif1} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      
  
      <div>
        <header className="exercise-header">
          
          <title>Half Squat</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={gif2} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      <div>
        <header className="exercise-header">
          
          <title>Hip Abduction</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={gif3} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
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
              <img src={gif4} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
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
              <img src={gif5} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
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
              <img src={gif6} alt="Logo" />
              <p>Placeholder Image</p>
            </div>
          </div>
  
          <div className="box-description">
            <img src={gif1} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>
      </div>
      </>
  
    );
  };
  
  export default knee;
