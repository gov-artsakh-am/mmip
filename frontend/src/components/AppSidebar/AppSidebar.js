import React from 'react';
import './AppSidebar.css';
import { useHistory, useLocation } from 'react-router';
import appLogoSvg from '../../assets/vectors/appLogo.svg';
import SidebarMenuItem from './SidebarMenuItem';
import UserInfo from './UserInfo';

const menuItems = {
  '/population': 'Բնակչություն',
  '/family': 'Ընտանիք',
  '/community': 'Համայնք',
  '/housing': 'Բնակ ֆոնդ',
};

const AppSidebar = ({ onSelect = () => {} }) => {
  const history = useHistory();
  const location = useLocation();

  const items = Object.keys(menuItems).map((key) => (
    <SidebarMenuItem
      key={key}
      selected={key === location.pathname}
      onClick={() => {
        history.push(`${key}`);
        onSelect();
      }}
    >
      {menuItems[key]}
    </SidebarMenuItem>
  ));

  return (
    <>
      <div className="AppSidebar">
        <img
          src={appLogoSvg}
          className="sidebarLogo"
          height={60}
          alt="sidebarLogo"
        />
        {items}
        <UserInfo firstName="Անուն" lastName="Ազգանուն" />
      </div>
    </>
  );
};

export default AppSidebar;
