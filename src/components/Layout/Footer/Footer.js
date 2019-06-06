import React from 'react';

import './Footer.css';
import love from '../../../assets/img/love.png';
const footer = () => (
  <footer>
    <div className="footer">
      <span className="Footer-end-description-one">Made with </span>
      <img className="Footer-love" src={love} alt="Love" />
      <span className="Footer-end-description-two">by Yago Matos</span>
    </div>
  </footer>
);

export default footer;
