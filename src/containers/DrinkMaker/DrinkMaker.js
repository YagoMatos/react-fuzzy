import React, { useState, useRef } from 'react';
import { Link, Route } from 'react-router-dom';

import DrinkResult from '../DrinkResult/DrinkResult';
import Button from '../../components/UI/Button/Button';
import RadioCards from '../../components/Layout/RadioCards/RadioCards';
import IngredientsCards from '../../components/Layout/IngredientsCard/IngredientsCard';

import './DrinkMaker.css';

export default function DrinkMaker() {
  const inputRef = useRef();
  const [softDrinkValue, setSoftDrinkValue] = useState(0);
  let [runValue, setRunValue] = useState(0);
  const [iceValue, setIceValue] = useState(0);
  const [pepsiOrCokeValue, setPepsiOrCokeValue] = useState('coke');

  const Ingredients = {
    softDrink: softDrinkValue,
    run: runValue,
    ice: iceValue,
    cokeOrPepsi: pepsiOrCokeValue,
  };

  function handleChanged(value) {
    if (value > 100) return 100;
    if (value < 0) return 0;
    return value;
  }

  return (
    <div className="DrinkMaker-container">
      <div className="DrinkMaker-title">
        <h1>Prepare já o seu Cuba Livre!</h1>
        <span>
          Escolha e defina as quantidades dos ingredientes para formar a bebida:
        </span>
      </div>
      <RadioCards
        checkedCoke={pepsiOrCokeValue === 'coke'}
        valueCoke="coke"
        onChange={e => setPepsiOrCokeValue(e.target.value)}
        valuePespi="pepsi"
        checkedPepsi={pepsiOrCokeValue === 'pepsi'}
      />
      <div className="DrinkMaker-content">
        <IngredientsCards
          refInput={inputRef}
          softDrinkValue={softDrinkValue}
          runValue={runValue}
          iceValue={iceValue}
          onChangeRunValue={(e, newRunValue) => setRunValue(newRunValue)}
          onChangeIceValue={(e, newIceValue) => setIceValue(newIceValue)}
          onChangeSoftDrinkValue={(e, newSoftDrinkValue) =>
            setSoftDrinkValue(newSoftDrinkValue)
          }
          onChangeInputSoft={e =>
            setSoftDrinkValue(handleChanged(e.target.value))
          }
          onChangeInputRun={e => setRunValue(handleChanged(e.target.value))}
          onChangeInputIce={e => setIceValue(handleChanged(e.target.value))}
        />
      </div>
      <div className="content-tools">
        <Link
          to={{
            pathname: '/drink',
            state: { ingredients: Ingredients },
          }}
        >
          <Button style="btn-calcular">Calcular</Button>
        </Link>
      </div>
      <Route path="/drink" render={() => <DrinkResult />} />
    </div>
  );
}
