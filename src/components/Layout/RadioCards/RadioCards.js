import React from 'react';
import RadioButton from '../../UI/RadioButton/RadioButton';

import './RadioCards.css';

const radioCards = props => {
  const { onChange, checkedCoke, valueCoke, valuePespi, checkedPepsi } = props;
  return (
    <div className="DrinkMaker-radios">
      <p className="DrinkMaker-title">Coca-Cola</p>
      <RadioButton
        checked={checkedCoke}
        value={valueCoke}
        onChange={onChange}
      />
      <p className="DrinkMaker-title">Pepsi</p>
      <RadioButton
        value={valuePespi}
        checked={checkedPepsi}
        onChange={onChange}
      />
    </div>
  );
};

export default radioCards;
