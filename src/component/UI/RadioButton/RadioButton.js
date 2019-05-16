import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: 'a',
  };

  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.props.checked}
          onChange={this.props.handleChange}
          value={this.props.values}
          name="radio-button-demo"
          aria-label="coke"
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
