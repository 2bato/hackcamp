
import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';


const shoulder = () => {
  return (
    <>
    <Header />
    <BackButton />
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
          <p>Discover a series of exercises aimed at alleviating shoulder pain. This section includes movements that target shoulder muscles and joints, helping to reduce pain, increase mobility, and improve overall shoulder health.e</p>
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

export default shoulder;
