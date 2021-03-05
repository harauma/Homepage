import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import TopComponent from './components/topComponent';
import Checkout from './components/Checkout';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/form">
          <Checkout />
        </Route>
        <Route path="/">
          <TopComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
