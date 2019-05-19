import React from 'react';

import './DegreeCard.css';

const degreeCard = props => {
  const { title, weak, strong, soft, value } = props;
  return (
    <div className="Degree-content">
      <div className="Degree-header">
        <p className="Degree-title">{title}</p>
      </div>
      <div className="Degree-body">
        <div className="Degree-item">Quantidade: {value} ml</div>
        <div className="Degree-item">Fraco: {weak}</div>
        <div className="Degree-item">Suave: {soft}</div>
        <div className="Degree-item">Forte: {strong}</div>
      </div>
    </div>
  );
};

export default degreeCard;
