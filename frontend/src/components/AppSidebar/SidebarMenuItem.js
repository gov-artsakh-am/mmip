import React from 'react';
import { Typography } from '@material-ui/core';
import './AppSidebar.css';

const SidebarMenuItem = ({
  children,
  selected = false,
  onClick = () => {},
}) => {
  const classes = ['sidebarMenuItem'];
  const textClasses = ['sidebarMenuItemText'];

  if (selected) {
    classes.push('sidebarMenuItemSelected');
    textClasses.push('sidebarMenuItemSelectedText');
  }

  const className = classes.join(' ');
  const textClassname = textClasses.join(' ');

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <Typography className={textClassname} variant="buttonText">
        {children}
      </Typography>
    </div>
  );
};

export default SidebarMenuItem;
