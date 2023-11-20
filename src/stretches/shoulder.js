
import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';
import shouldergif1 from "./shoulderstretches/crossarmstrech.webp";
import shouldergif2 from "./shoulderstretches/shoulderraises.webp";
import shouldergif3 from "./shoulderstretches/standingarmcircles.webp";
import shouldergif4 from "./shoulderstretches/wideleggedforewardbend.webp";


const shoulder = () => {
  return (
    <> 
    <Header />
    <BackButton />
    <div className="container">
      <div className="image-side">
        <img className="shouldergif1" src={shouldergif1} alt="stretch1" />
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
        <img className="shouldergif2" src={shouldergif2} alt="stretch1" />
      </div>
    </div>
    <div>

    <div className="container">
      <div className="image-side">
        <img className="shouldergif3" src={shouldergif3} alt="hipgif3" />
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
        <img className="shouldergif4" src={shouldergif4} alt="stretch1" />
      </div>
    </div>


   
    </div>
    </>

  );
};

export default shoulder;
