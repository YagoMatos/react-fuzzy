import React, { Component } from 'react';

import DegreeCard from '../../components/Layout/DegreeCard/DegreeCard';
import IceDegreeCard from '../../components/Layout/DegreeCard/IceDegreeCard/IceDegreeCard';

import {
  cokeSoftDegree,
  cokeWeakDegree,
  cokeStrongDegree,
} from '../../services/coke';
import {
  pepsiSoftDegree,
  pepsiWeakDegree,
  pepsiStrongDegree,
} from '../../services/pepsi';
import {
  runSoftDegree,
  runWeakDegree,
  runStrongDegree,
} from '../../services/run';
import { iceDegree } from '../../services/ice';
import {
  drinkStrongDegree,
  drinkWeakDegree,
  drinkSoftDegree,
} from '../../services/drink';

import './Drink.css';

class DrinkResult extends Component {
  state = {
    ingredients: {},
    ice: {},
    softDrink: {},
    run: {},
    drink: {},
  };

  componentDidMount() {
    const { ingredients } = this.props.location.state;
    this.setState({
      ingredients: {
        iceValue: ingredients.ice,
        runValue: ingredients.run,
        softDrinkValue: ingredients.softDrink,
        cokeOrPepsiValue: ingredients.cokeOrPespi,
      },
      run: {
        name: 'Run',
        strong: runStrongDegree(ingredients.run),
        weak: runWeakDegree(ingredients.run),
        soft: runSoftDegree(ingredients.run),
      },
      ice: {
        name: 'Gelo',
        pertinence: iceDegree(ingredients.ice),
      },
      // drink: {
      //   name: 'Cuba-Livre',
      //   strong: drinkStrongDegree(),
      //   weak: drinkWeakDegree(),
      //   soft: drinkSoftDegree()
      // },
    });

    //if (ingredients.cokeOrPepsiValue === 'coke'){
    this.setState({
      softDrink: {
        name: 'Coca-Cola',
        strong: cokeStrongDegree(ingredients.softDrink),
        weak: cokeWeakDegree(ingredients.softDrink),
        soft: cokeSoftDegree(ingredients.softDrink),
      },
    });
    //}
  }

  render() {
    const { softDrink, ice, run, drink } = this.state;
    const { softDrinkValue, runValue, iceValue } = this.state.ingredients;

    return (
      <div className="Drink-header">
        <div className="Drink-container">
          <DegreeCard
            title={softDrink.name}
            value={softDrinkValue}
            strong={softDrink.strong}
            weak={softDrink.weak}
            soft={softDrink.soft}
          />
          <DegreeCard
            title={run.name}
            value={runValue}
            strong={run.strong}
            weak={run.weak}
            soft={run.soft}
          />
          <IceDegreeCard
            title={ice.name}
            value={iceValue}
            pertinence={ice.pertinence}
          />
        </div>
        <div className="Degree-result">
          <DegreeCard
            title={run.name}
            value={runValue}
            strong={run.strong}
            weak={run.weak}
            soft={run.soft}
          />
        </div>
      </div>
    );
  }
}

export default DrinkResult;
