import React, { Component } from 'react';
import VerticalSlider from '../../component/UI/Slider/Slider';
import './DrinkMaker.css';

class DrinkMaker extends Component {
  state = {
    first: 50,
    second: 50,
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="container">
        <div className="content-item">
          <VerticalSlider
            values={this.state.value}
            changed={this.handleChange}
          />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={this.state.value}
            changed={this.handleChange}
          />
        </div>
        <div className="content-item">
          <VerticalSlider
            values={this.state.value}
            changed={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default DrinkMaker;
