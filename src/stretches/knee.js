
import React from 'react';
import "../App.css";
import gif1 from "./kneestretches/CalfRaises.webp";
import headerlogo from "../stretch-logo.png";


const knee = () => {
    return (
      <>
      <header className="App-header">
          <img src={headerlogo} className="App-logo" />
          <title>JointPal</title>
      </header>
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
          
          <title>This is an exercise</title>
        </header>
  
        <div className="row">
          <div className="box-container">
            <div>
              <img src={gif1} alt="Logo" />
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
