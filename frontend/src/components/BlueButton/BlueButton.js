import React from 'react';
import './BlueButton.css';

const BlueButton = ({ text, onClick }) => <div className="button" onClick={onClick}>{text}</div>;

export default BlueButton;
