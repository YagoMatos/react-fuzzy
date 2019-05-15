import React, { useState } from 'react';
import VerticalSlider from '../../component/UI/Slider/Slider';
import Button from '../../component/UI/Button/Button';
import Badge from '../../component/UI/Badge/Badge';
import './DrinkMaker.css';

export default function DrinkMaker() {
  const [cokeValue, setCokeValue] = useState(50);
  const [runValue, setRunValue] = useState(50);
  const [iceValue, setIceValue] = useState(50);

  return (
    <div className="container">
      <div className="content">
        <div className="content-item">
          <VerticalSlider
            values={cokeValue}
            onChange={(e, newCokeValue) => setCokeValue(newCokeValue)}
          />
          <Badge
            value={cokeValue.toFixed(0)}
            onChange={(e, newCokeValue) => setCokeValue(newCokeValue)}
          />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={runValue}
            onChange={(e, newRunValue) => setRunValue(newRunValue)}
          />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={iceValue}
            onChange={(event, newIceValue) => setIceValue(newIceValue)}
          />
        </div>
      </div>
      <div className="content-tools">
        <Button>Limpar</Button>
        <Button>Calcular</Button>
      </div>
    </div>
  );
}
