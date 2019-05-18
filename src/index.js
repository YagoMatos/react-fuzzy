import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Drink from './container/Drink/Drink';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/drink" component={Drink} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
