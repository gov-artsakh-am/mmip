import { Drawer, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import React, { useState } from 'react';
import AppSidebar from '../AppSidebar/AppSidebar';

const AppDrawer = () => {
  const [open, setOpen] = useState(null);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer anchor="left" open={!!open} onClose={toggleDrawer(false)}>
        <AppSidebar onSelect={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default AppDrawer;
