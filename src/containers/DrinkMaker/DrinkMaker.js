import React, { useState, useRef } from 'react';
import { Link, Route } from 'react-router-dom';

import Drink from '../Drink/Drink';
import Button from '../../components/UI/Button/Button';
import RadioButon from '../../components/UI/RadioButton/RadioButton';
import VerticalSlider from '../../components/UI/Slider/Slider';
import Badge from '../../components/UI/Badge/Badge';

import './DrinkMaker.css';

export default function DrinkMaker() {
  const inputRef = useRef();
  const [softDrinkValue, setSoftDrinkValue] = useState(0);
  const [runValue, setRunValue] = useState(0);
  const [iceValue, setIceValue] = useState(0);
  const [pepsiOrCokeValue, setPepsiOrCokeValue] = useState('coke');

  const Ingredients = {
    softDrink: softDrinkValue,
    run: runValue,
    ice: iceValue,
    cokeOrPepsi: pepsiOrCokeValue,
  };

  const handleChanged = value => {
    if (value > 100) return 100;
    if (value < 0) return 0;
    return value;
  };

  return (
    <div className="DrinkMaker-container">
      <div>
        <RadioButon
          checked={pepsiOrCokeValue === 'coke'}
          value="coke"
          onChange={e => setPepsiOrCokeValue(e.target.value)}
        />
        <RadioButon
          value="pepsi"
          checked={pepsiOrCokeValue === 'pepsi'}
          onChange={e => setPepsiOrCokeValue(e.target.value)}
        />
      </div>
      <div className="DrinkMaker-content">
        <div className="content-ingredients">
          <div className="content-item">
            <VerticalSlider
              value={softDrinkValue}
              onChange={(e, newSoftDrinkValue) =>
                setSoftDrinkValue(newSoftDrinkValue)
              }
            />
            <input
              ref={inputRef}
              type="number"
              value={softDrinkValue}
              onChange={e => setSoftDrinkValue(handleChanged(e.target.value))}
            />
          </div>
          <div className="content-item">
            <VerticalSlider
              value={runValue}
              onChange={(e, newRunValue) => setRunValue(newRunValue)}
            />
            <input
              ref={inputRef}
              type="number"
              value={runValue}
              onChange={e => setRunValue(handleChanged(e.target.value))}
            />
          </div>
          <div className="content-item">
            <VerticalSlider
              value={iceValue}
              onChange={(e, newIceValue) => setIceValue(newIceValue)}
            />
            <input
              ref={inputRef}
              type="number"
              value={iceValue}
              onChange={e => setIceValue(handleChanged(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="content-tools">
        <Button style="btn-clear">Limpar</Button>
        <Link
          to={{
            pathname: '/drink',
            state: { ingredients: Ingredients },
          }}
        >
          <Button style="btn-calcular">Calcular</Button>
        </Link>
      </div>
      <Route path="/drink" render={() => <Drink />} />
    </div>
  );
}
