import React from 'react'
import './Input.css'

const input = (props) => (
  <input
    type='number'
    ref={props.refInput}
    value={props.value}
    onChange={props.changed}
  />
)

export default input
