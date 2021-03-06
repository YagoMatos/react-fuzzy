import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DegreeCard from '../../components/Layout/DegreeCard/DegreeCard';
import IceDegreeCard from '../../components/Layout/DegreeCard/IceDegreeCard/IceDegreeCard';
import DrinkDegreeCard from '../../components/Layout/DegreeCard/DrinkDegreeCard/DrinkDegreeCard';
import Button from '../../components/UI/Button/Button';
import Layout from '../../components/Layout/Layout';

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

import './DrinkResult.css';

class DrinkResult extends Component {
  state = {
    ingredients: {},
    ice: {},
    softDrink: {},
    run: {},
    pepsi: {},
  };

  componentDidMount() {
    const { ingredients } = this.props.location.state;
    this.setState({
      ingredients: {
        iceValue: ingredients.ice,
        runValue: ingredients.run,
        softDrinkValue: ingredients.softDrink,
        cokeOrPepsiValue: ingredients.cokeOrPepsi,
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
      softDrink: {
        name: 'Coca-Cola',
        strong: cokeStrongDegree(ingredients.softDrink),
        weak: cokeWeakDegree(ingredients.softDrink),
        soft: cokeSoftDegree(ingredients.softDrink),
      },
      pepsi: {
        name: 'Pespi',
        strong: pepsiStrongDegree(ingredients.softDrink),
        weak: pepsiWeakDegree(ingredients.softDrink),
        soft: pepsiSoftDegree(ingredients.softDrink),
      },
    });
  }

  pespiOrCoca = cokeOrPepsiValue => {
    const { softDrink, pepsi } = this.state;
    const { softDrinkValue } = this.state.ingredients;

    switch (cokeOrPepsiValue) {
      case 'coke':
        return (
          <DegreeCard
            title={softDrink.name}
            value={softDrinkValue}
            strong={softDrink.strong}
            weak={softDrink.weak}
            soft={softDrink.soft}
          />
        );
      case 'pepsi':
        return (
          <DegreeCard
            title={pepsi.name}
            value={softDrinkValue}
            strong={pepsi.strong}
            weak={pepsi.weak}
            soft={pepsi.soft}
          />
        );
    }
  };

  render() {
    const { softDrink, pepsi, ice, run } = this.state;
    const {
      runValue,
      iceValue,
      cokeOrPepsiValue,
      softDrinkValue,
    } = this.state.ingredients;

    return (
      <Layout>
        <div className="Drink-header">
          <div className="Drink-container">
            {this.pespiOrCoca(cokeOrPepsiValue)}
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
            {cokeOrPepsiValue === 'coke' && (
              <DrinkDegreeCard
                title="Resultado do Drink:"
                ice={ice}
                run={run}
                softDrink={softDrink}
                iceQtd={iceValue}
                runQtd={runValue}
                softQtd={softDrinkValue}
                softName={cokeOrPepsiValue}
              />
            )}
            {cokeOrPepsiValue === 'pepsi' && (
              <DrinkDegreeCard
                title="Resultado do Drink:"
                ice={ice}
                run={run}
                softDrink={pepsi}
                iceQtd={iceValue}
                runQtd={runValue}
                softQtd={softDrinkValue}
                softName={cokeOrPepsiValue}
              />
            )}
          </div>
          <div>
            <Link to="/">
              <Button style="btn-goBack">Voltar</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default DrinkResult;
