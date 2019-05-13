import React, { Component } from 'react';
import VerticalSlider from '../../component/UI/Slider/Slider';

class DrinkMaker extends Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <VerticalSlider values={this.state.value} changed={this.handleChange} />
    );
  }
}

export default DrinkMaker;
