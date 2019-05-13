import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
  slider: {
    padding: '0px 22px',
    background: '#000',
  },
};

class VerticalSlider extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={this.props.values}
          onChange={this.props.changed}
          vertical
        />
      </div>
    );
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalSlider);
