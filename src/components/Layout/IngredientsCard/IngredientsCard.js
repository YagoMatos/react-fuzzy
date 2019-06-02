import React from 'react';
import VerticalSlider from '../../UI/Slider/Slider';
import Badge from '../../UI/Badge/Badge';
import './IngredientsCard.css';

const ingredientsCard = props => {
  const {
    softDrinkValue,
    onChangeSoftDrinkValue,
    badgeSoftDrinkValue,
    runValue,
    onChangeRunValue,
    badgeRunValue,
    iceValue,
    onChangeIceValue,
    badgeIceValue,
  } = props;

  return (
    <div className="content-ingredients">
      <div className="content-item">
        <VerticalSlider
          value={softDrinkValue}
          onChange={onChangeSoftDrinkValue}
        />
        <Badge value={badgeSoftDrinkValue} />
      </div>
      <div className="content-item">
        <VerticalSlider value={runValue} onChange={onChangeRunValue} />
        <Badge value={badgeRunValue} />
      </div>
      <div className="content-item">
        <VerticalSlider value={iceValue} onChange={onChangeIceValue} />
        <Badge value={badgeIceValue} />
      </div>
    </div>
  );
};

export default ingredientsCard;
