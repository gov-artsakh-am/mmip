import { makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import PersonMainInfo from '../../components/PersonMainInfo/PersonMainInfo';

const tabStyle = {
  default_tab: {
    color: 'black',
  },
  active_tab: {
    color: '#5B84D3',
    fontWeight: 'bold',
  },
};

const useStyles = makeStyles(() => ({
  personInfo: {
    padding: 20,
  },
  indicator: {
    backgroundColor: '#5B84D3',
  },
}));

const PersonInfo = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const getStyle = (isActive) => (isActive ? tabStyle.active_tab : tabStyle.default_tab);

  return (
    <div className={classes.personInfo}>
      <PersonMainInfo />
      <Tabs
        value={activeIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={(evt, newValue) => setActiveIndex(newValue)}
        classes={{
          indicator: classes.indicator,
        }}
      >
        <Tab label="Անձնական" style={getStyle(activeIndex === 0)} />
        <Tab label="Աշխատանք" style={getStyle(activeIndex === 1)} />
        <Tab label="Կրթություն" style={getStyle(activeIndex === 2)} />
        <Tab label="Ընտանիք" style={getStyle(activeIndex === 3)} />
        <Tab
          label="Սոցիալական կարգավիճակ"
          style={getStyle(activeIndex === 4)}
        />
        <Tab
          label="Զինվորական ծառայություն"
          style={getStyle(activeIndex === 5)}
        />
        <Tab label="Բժշկական քարտ" style={getStyle(activeIndex === 6)} />
      </Tabs>
    </div>
  );
};

export default PersonInfo;
