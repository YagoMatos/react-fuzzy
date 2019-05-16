import React, { useState } from 'react';
import VerticalSlider from '../../component/UI/Slider/Slider';
import Button from '../../component/UI/Button/Button';
import Badge from '../../component/UI/Badge/Badge';
import RadioButon from '../../component/UI/RadioButton/RadioButton';

import './DrinkMaker.css';

export default function DrinkMaker() {
  const [cocaValue, setCocaValue] = useState(0);
  const [runValue, setRunValue] = useState(0);
  const [iceValue, setIceValue] = useState(0);
  const [cokeValue, setCokeValue] = useState('coke');
  const [pespiValue, setPepsiValue] = useState('pespi');

  return (
    <div className="container">
      <div>
        <RadioButon
          checked={cokeValue === 'coke'}
          values={cokeValue}
          onChange={(e, newCocaValue) => setCokeValue('coke')}
        />
        <RadioButon
          values={pespiValue}
          checked={pespiValue === 'pespi'}
          onChange={(e, newPespiValue) => setPepsiValue('pepsi')}
        />
      </div>
      <div className="content">
        <div className="content-item">
          <VerticalSlider
            values={cocaValue}
            onChange={(e, newCocaValue) => setCocaValue(newCocaValue)}
          />
          <Badge value={cocaValue.toFixed(0)} />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={runValue}
            onChange={(e, newRunValue) => setRunValue(newRunValue)}
          />
          <Badge value={runValue.toFixed(0)} />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={iceValue}
            onChange={(e, newIceValue) => setIceValue(newIceValue)}
          />
          <Badge value={iceValue.toFixed(0)} />
        </div>
      </div>
      <div className="content-tools">
        <Button style="btn-clear">Limpar</Button>
        <Button style="btn-calcular">Calcular</Button>
      </div>
    </div>
  );
}
