
import React from 'react';
import './StatisticCard.css';

const StatisticalCard = ({ title, value, color }) => {
  return (
    <div className="statistical-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatisticalCard;