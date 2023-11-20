
import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';
import anklegif1 from "./anklestretches/Achilles_Stretch.gif";
import anklegif2 from "./anklestretches/Chair_Pose.gif";
import anklegif3 from "./anklestretches/Band_Stretch.gif";
import anklegif4 from "./anklestretches/Cross_Leg_Ankle_Stretch.gif";
import anklegif5 from "./anklestretches/Towel_Stretch.gif";



const ankle = () => {
  return (
    <> 
    <Header />
    <BackButton />
    <div className="container">
      <div className="image-side">
        <img className="anklegif1" src={anklegif1} alt="stretch1" />
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
        <img className="anklegif2" src={anklegif2} alt="stretch1" />
      </div>
    </div>
    <div>

    <div className="container">
      <div className="image-side">
        <img className="anklegif3" src={anklegif3} alt="hipgif3" />
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
        <img className="anklegif4" src={anklegif4} alt="stretch1" />
      </div>
    </div>

    <div className="container">
      <div className="image-side">
        <img className="anklegif5" src={anklegif5} alt="anklegif5" />
      </div>
      <div className="text-side">
        <h1>Travel photography portfolio</h1>
        <p>Photography from all over the world by Pat Kay</p>
        <a href="link-to-your-portfolio" className="view-portfolio-button">View portfolio</a>
      </div>
    </div>


   
    </div>
    </>

  );
};

export default ankle;