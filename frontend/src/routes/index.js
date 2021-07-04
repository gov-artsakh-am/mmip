import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';

import Auth from '../pages/Auth/Auth';
import AppSidebar from '../components/AppSidebar/AppSidebar';
import AppBarMenu from '../components/AppBarMenu/AppBarMenu';
import AppDrawer from '../components/AppDrawer/AppDrawer';
import './Routes.css';

function PrivateRoute({ component: Component, ...rest }) {
  const sm = useMediaQuery('(max-width: 600px)', { noSsr: true });
  const [selectedItem, setSelectedItem] = useState(0);
  const authed = !!localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => authed
        ? <div className="mainContainer">
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
                onSelect={() => { }}
              />
            )}
          </AppBar>
          <Component {...props} />
        </div>
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/population" component={Auth} />
      <PrivateRoute exact path="/family" component={Auth} />
      <PrivateRoute exact path="/community" component={Auth} />
      <Route path="/" component={Auth} />
    </Switch>
  );
}

export default Routes;
