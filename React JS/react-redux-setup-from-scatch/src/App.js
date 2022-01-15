/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import logo from './logo.svg';
import './App.css';
import classes from './App.module.css';
import { useState } from 'react';
import {
  useHistory,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import DashboardPage from './pages/DashboardPage.js';
import AuthPage from './pages/AuthPage';
import "antd/dist/antd.css";
import { useJwt } from "react-jwt";
import {store,persistor} from './store/index'


function App() {

  const token = localStorage.getItem('tt');
  const { isExpired } = useJwt(token);
  const history = useHistory();
  if (isExpired === true)
    history.replace('/login')

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route path="/login" component={AuthPage} />
          {isExpired === false &&
            <Route exact path="/" component={DashboardPage} />
          }
        </Switch>
      </PersistGate>
    </Provider>
  );
}

export default App;
