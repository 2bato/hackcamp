import React from "react";
import "../App.css";
import headerlogo from "../stretch-logo.png";
import { Link } from "react-router-dom";


function BackButton() {
    return(
    <Link to="/" style={{ textDecoration: "none"}}>
        <button class="arrow-button"><span class="arrow"></span>Back</button>
    </Link>
    );
};




export default BackButton;
