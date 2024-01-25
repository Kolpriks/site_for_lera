import React from 'react';
import './WhyUsCard.css';

const WhyUsCard = ({ text1, text2, frame }) => {
  return (
    <div className="why-us-card">
      <img src={frame} alt="Image" className="why-us-img" />
      <div className="why-us-text-container">
        <p className='accent'>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
