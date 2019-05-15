import React from 'react';

const badge = props => (
  <input
    type="number"
    min="0"
    max="100"
    disabled
    value={props.value}
    onChange={props.onChange}
  />
);

export default badge;
