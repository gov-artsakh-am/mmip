import React from 'react';
import './Table.css';

const LogoWithText = ({ logo, label }) => (
  <div className="flexContainer">
    <img className="roundedImage" src={logo} alt="logo" />
    <div>{label}</div>
  </div>
);

export default LogoWithText;
