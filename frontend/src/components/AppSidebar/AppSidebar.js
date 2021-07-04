import React from "react";
import "./AppSidebar.css";
import appLogoSvg from "../../assets/vectors/appLogo.svg";
import SidebarMenuItem from "./SidebarMenuItem";

const AppSidebar = ({ selectedItem, onChange }) => {
  const items = menuItems.map((itemName, index) => (
    <SidebarMenuItem
      key={index}
      selected={selectedItem === index}
      onClick={() => onChange(index)}
    >
      {itemName}
    </SidebarMenuItem>
  ));

  return (
    <>
      <div className="AppSidebar">
        <img src={appLogoSvg} className="sidebarLogo" height={60} />
        {items}
      </div>
    </>
  );
};

export default AppSidebar;

const menuItems = ["Բնակչություն", "Ընտանիք", "Համայնք"];
