import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import DrinkResult from './containers/DrinkResult/DrinkResult';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/drink" component={DrinkResult} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
