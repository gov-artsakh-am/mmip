import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import AppSidebar from "./components/AppSidebar/AppSidebar";
import Auth from "./pages/Auth/Auth";
import AppBarMenu from "./components/AppBarMenu/AppBarMenu";
import AppDrawer from "./components/AppDrawer/AppDrawer";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sm = useMediaQuery("(max-width: 600px)", { noSsr: true });

  const routes = (
    <Switch>
      <Route path="/" component={Auth} />
    </Switch>
  );

  return (
    <div className="App">
      <div className="leftMargin"></div>
      <div className="appContent">
        <AppBar position="static" color="transparent">
          <Toolbar>
            {sm && <AppDrawer />}
            <div style={{ flexGrow: 1 }}></div>
            <AppBarMenu />
          </Toolbar>
          {!sm && (
            <AppSidebar
              selectedItem={selectedItem}
              onChange={(newItem) => {
                console.log("on hcange called");
                setSelectedItem(newItem);
              }}
            />
          )}
        </AppBar>
        <div className="routes">{routes}</div>
      </div>
    </div>
  );
};

export default App;
