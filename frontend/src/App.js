import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Api from './utils/Api';
import './App.css';
import AppSidebar from './components/AppSidebar/AppSidebar';
import Auth from './pages/Auth/Auth';
import AppBarMenu from './components/AppBarMenu/AppBarMenu';
import AppDrawer from './components/AppDrawer/AppDrawer';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sm = useMediaQuery('(max-width: 600px)', { noSsr: true });

  const routes = (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );
  Api.post('api/auth/signin/', { username: 'user', password: 'user'}, (data) => {
    localStorage.setItem('token', data.accessToken);
    setTimeout(() => {
      Api.get('api/main/', { table: 'Համայնք' }, (data1)  => {
      console.log(data1, '=[======')
    });}, 1000);
  })

  return (
    <div className="App">
      <div className="leftMargin" />
      <div className="appContent">
        <AppBar position="static" color="transparent">
          <Toolbar>
            {sm && <AppDrawer />}
            <div style={{ flexGrow: 1 }} />
            <AppBarMenu />
          </Toolbar>
          {!sm && (
            <AppSidebar
              selectedItem={selectedItem}
              onChange={(newItem) => {
                setSelectedItem(newItem);
              }}
              onSelect={() => {}}
            />
          )}
        </AppBar>
        <div className="routes">{routes}</div>
      </div>
    </div>
  );
};

export default App;
