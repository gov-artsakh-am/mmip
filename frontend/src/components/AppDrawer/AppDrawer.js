import { Button, Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import React, { useState } from "react";
import AppSidebar from "../AppSidebar/AppSidebar";

const AppDrawer = () => {
  const [open, setOpen] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer anchor={"left"} open={!!open} onClose={toggleDrawer(false)}>
        <AppSidebar />
      </Drawer>
    </React.Fragment>
  );
};

export default AppDrawer;
