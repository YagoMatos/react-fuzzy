import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import Drink from '../Drink/Drink';
import Button from '../../component/UI/Button/Button';
import RadioButon from '../../component/UI/RadioButton/RadioButton';
import IngredientsCard from '../../component/Layout/IngredientsCard/IngredientsCard';

import './DrinkMaker.css';

export default function DrinkMaker() {
  const [cocaValue, setCocaValue] = useState(0);
  const [runValue, setRunValue] = useState(0);
  const [iceValue, setIceValue] = useState(0);
  const [pespiOrCokeValue, setPepsiOrCokeValue] = useState('coke');

  const Ingredients = {
    coca: cocaValue,
    run: runValue,
    ice: iceValue,
    cokeOrPespi: pespiOrCokeValue,
  };

  return (
    <div className="DrinkMaker-container">
      <div>
        <RadioButon
          checked={pespiOrCokeValue === 'coke'}
          value="coke"
          onChange={e => setPepsiOrCokeValue(e.target.value)}
        />
        <RadioButon
          value="pepsi"
          checked={pespiOrCokeValue === 'pepsi'}
          onChange={e => setPepsiOrCokeValue(e.target.value)}
        />
      </div>
      <div className="DrinkMaker-content">
        <IngredientsCard
          cocaValue={cocaValue}
          onChangeValueCoca={(e, newCocaValue) => setCocaValue(newCocaValue)}
          badgeCocaValue={cocaValue.toFixed(0)}
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
