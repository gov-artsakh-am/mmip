import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";

import Auth from "../pages/Auth/Auth";
import Population from "../pages/Population/Population";
import Housing from "../pages/Housing/Housing";
import Family from "../pages/Family/Family";
import Community from "../pages/Community/Community";
import CommunityDetails from "../pages/CommunityDetails/CommunityDetails";
import AppSidebar from "../components/AppSidebar/AppSidebar";
import AppBarMenu from "../components/AppBarMenu/AppBarMenu";
import AppDrawer from "../components/AppDrawer/AppDrawer";
import "./Routes.css";
import PersonInfo from "../pages/PersonInfo/PersonInfo";

function CommingSoon() {
  return <div>Comming Soon</div>;
}

function PrivateRoute({ component: Component, ...rest }) {
  const sm = useMediaQuery("(max-width: 600px)", { noSsr: true });
  const [selectedItem, setSelectedItem] = useState(0);
  const authed = !!localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? (
          <div className="mainContainer">
            <AppBar position="static" color="transparent">
              {!sm && <AppBarMenu />}
              <Toolbar>
                {sm && <AppDrawer />}
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
            <Component {...props} />
          </div>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/population" component={Population} />
      <PrivateRoute exact path="/population/:id" component={PersonInfo} />
      <PrivateRoute exact path="/family" component={Family} />
      <PrivateRoute exact path="/housing" component={Housing} />
      <PrivateRoute exact path="/community" component={Community} />
      <PrivateRoute exact path="/community/:id" component={CommunityDetails} />
      <Route path="/" component={Auth} />
    </Switch>
  );
}

export default Routes;
