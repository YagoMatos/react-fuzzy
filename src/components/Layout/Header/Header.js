import React from 'react'

import './Header.css'
import logo from '../../../assets/img/logo.png'
const header = () => (
  <header>
    <div className='header'>
      <img src={logo} alt='Logo' />
      <span className='header-title'>Brazilian Prog Bomb</span>
    </div>
  </header>
)

export default header
