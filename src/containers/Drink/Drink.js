import React, { Component } from 'react';
import './Drink.css';

class DrinkResult extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Drink-header">
        <div className="Drink-container">
          <div className="Drink-content">
            <h1>Ola</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DrinkResult;
