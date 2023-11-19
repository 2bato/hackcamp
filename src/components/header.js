import React from "react";
import "../App.css";
import headerlogo from "../stretch-logo.png";
import { Link } from "react-router-dom";


function Header() {
    return(
    <Link to="/">
  <header className="App-header">
    <img className="App-logo" src={headerlogo} />
    <title>JointPal</title>
  </header>

    </Link>
    );
};




export default Header;
