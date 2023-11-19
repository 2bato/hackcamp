import React from "react";
import "./bodymap.css";
import anatomy from "./bodymap.jpg";
import { Link } from "react-router-dom";
const Bodymap = () => {
  return (
    <div className="bodymap">
      <img src={anatomy} className="anatomy" />
    
      <button className="neck"></button>
      <Link to="/elbow">
      <button className="elbow"></button>
      </Link>
      <button className="shoulder"></button>
      <button className="knee"></button>
      <button className="wrist"></button>     
      <button className="hip"></button>
    </div>
  );
};

export default Bodymap;
