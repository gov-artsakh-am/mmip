import React from 'react';
import { AccountCircle } from '@material-ui/icons';

import './AppBarMenu.css';

const AppBarMenu = () => (
  <div className="AppBarMenu">
    <AccountCircle
      style={{ color: '#263238', fontSize: 50 }}
      className="appBarMenuAvatar"
    />
  </div>
);

export default AppBarMenu;
