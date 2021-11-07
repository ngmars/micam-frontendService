import React from 'react';
import './App.css';
import {Switch, Route,Router, Redirect, withRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Boot from './Redux/boot';
import Routes from './router';

const App = () => (
  <Provider store={store}>
      <>
        <Routes />
      </>
  </Provider>
);
// Boot()
//   .then(() => App())
//   .catch(error => console.error(error));

export default App;