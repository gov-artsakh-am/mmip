import React from 'react';
import userAvatar from '../../assets/vectors/userAvatar.svg';
import userSettingIcon from '../../assets/vectors/userSettings.svg';
import settingIcon from '../../assets/vectors/settings.svg';
import logoutIcon from '../../assets/vectors/logout.svg';

const MENU_ITEMS = [{ icon: userSettingIcon, label: 'Օգտատիրոջ կարգավորումներ' }, { icon: settingIcon, label: 'Կարգավորումներ' }, { icon: logoutIcon, label: 'Ելք' }];

const UserInfo = ({ firstName, lastName }) => (
  <div className="userInfoContainer">
    <div
      selected={false}
      onClick={() => {
        // TODO: Do necessary action
      }}
      className="withBorder sidebarMenuItemContainer"
    >
      <img src={userAvatar} alt="userAvatar" />
      <div className="sidebarMenuItemText">
        {firstName} {lastName}
      </div>
    </div>
    {MENU_ITEMS.map(({ icon, label }) => (
      <div
        key={label}
        selected={false}
        onClick={() => {
          // TODO: Do necessary action
        }}
        className="sidebarMenuItemContainer"
      >
        <img src={icon} alt={label} />
        <div className="sidebarMenuItemText">{label}</div>
      </div>
    ))}
  </div>
);

export default UserInfo;
