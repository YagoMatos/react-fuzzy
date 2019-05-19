import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import Drink from '../Drink/Drink';
import Button from '../../components/UI/Button/Button';
import RadioButon from '../../components/UI/RadioButton/RadioButton';
import IngredientsCard from '../../components/Layout/IngredientsCard/IngredientsCard';

import './DrinkMaker.css';

export default function DrinkMaker() {
  const [softDrinkValue, setSoftDrinkValue] = useState(0);
  const [runValue, setRunValue] = useState(0);
  const [iceValue, setIceValue] = useState(0);
  const [pepsiOrCokeValue, setPepsiOrCokeValue] = useState('coke');

  const Ingredients = {
    softDrink: softDrinkValue.toFixed(0),
    run: runValue.toFixed(0),
    ice: iceValue.toFixed(0),
    cokeOrPepsi: pepsiOrCokeValue,
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
        <IngredientsCard
          softDrinkValue={softDrinkValue}
          onChangeSoftDrinkValue={(e, newSoftDrinkValue) =>
            setSoftDrinkValue(newSoftDrinkValue)
          }
          badgeSoftDrinkValue={softDrinkValue.toFixed(0)}
          runValue={runValue}
          onChangeRunValue={(e, newRunValue) => setRunValue(newRunValue)}
          badgeRunValue={runValue.toFixed(0)}
          iceValue={iceValue}
          onChangeIceValue={(e, newIceValue) => setIceValue(newIceValue)}
          badgeIceValue={iceValue.toFixed(0)}
        />
      </div>
      <div className="content-tools">
        <Button style="btn-clear">Limpar</Button>
        <Link
          to={{
            pathname: '/drink',
            state: {
              ingredients: Ingredients,
            },
          }}
        >
          <Button style="btn-calcular">Calcular</Button>
        </Link>
      </div>
      <Route path="/drink" render={() => <Drink />} />
    </div>
  );
}
