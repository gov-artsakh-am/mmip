import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Auth from './pages/Auth/Auth';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" component={Auth} />
    </Switch>
  );

  return <div>{routes}</div>;
};

export default App;
