import React from 'react';
import { useHistory } from 'react-router';

import userAvatar from '../../assets/vectors/userAvatar.svg';
import userSettingIcon from '../../assets/vectors/userSettings.svg';
import settingIcon from '../../assets/vectors/settings.svg';
import logoutIcon from '../../assets/vectors/logout.svg';
import { decodeToken } from '../../utils/jwt';

const MENU_ITEMS = [{
  icon: settingIcon,
  label: 'Օգտատիրոջ կարգավորումներ',
}, {
  icon: userSettingIcon,
  label: 'Կարգավորումներ',
}, {
  icon: logoutIcon,
  label: 'Ելք',
  action: 'logout',
}];

function UserInfo() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const user = decodeToken(token);
  const actions = {
    logout: () => {
      localStorage.removeItem('token');
      history.length = 1;
      history.replace('/');
    },
  };
  return (
    <div className="userInfoContainer">
      <div
        selected={false}
        onClick={() => {
          // TODO: Do necessary action
        }}
        className="withBorder sidebarMenuItemContainer"
      >
        <img src={userAvatar} alt="userAvatar" width="40px" height="40px" />
        <div className="sidebarMenuItemText">
          {user.name} {user.surname}
        </div>
      </div>
      {MENU_ITEMS.map(({ icon, label, action }) => (
        <div
          key={label}
          selected={false}
          onClick={() => {
            if (actions[action]) {
              actions[action]();
            }
          }}
          className="sidebarMenuItemContainer"
        >
          <img src={icon} alt={label} />
          <div className="sidebarMenuItemText">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default UserInfo;
