import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import './AppBarMenu.css';

const AppBarMenu = () => (
  <div className="AppBarMenu">
    <AccountCircle
      style={{ color: '#263238', fontSize: 50 }}
      className="appBarMenuAvatar"
    />
    <Typography variant="buttonText" className="appBarMenuUserName">
      Անուն Ազգանուն
    </Typography>
  </div>
);

export default AppBarMenu;
