
import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';


const hip = () => {
  return (
    <>
    <Header />
    <div>
      <header className="exercise-header">
        <title>This is an exercise</title>
      </header>

      <div className="row">
        <div className="box-container">
          <div>
            <img src={logo} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>

        <div className="box-description">
          <img src={logo} alt="Logo" />
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
            <img src={logo} alt="Logo" />
            <p>Placeholder Image</p>
          </div>
        </div>

        <div className="box-description">
          <img src={logo} alt="Logo" />
          <p>Placeholder Image</p>
        </div>
      </div>
    </div>
    </>

  );
};

export default hip;
