import { Button, IconButton, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

import { Delete } from "@material-ui/icons";
import { lightBlue } from "@material-ui/core/colors";
import PersonalTab from "./Tabs/PersonalTab";
import PersonMainInfo from "../../components/PersonMainInfo/PersonMainInfo";

const tabStyle = {
  default_tab: {
    color: "black",
  },
  active_tab: {
    color: "#5B84D3",
    fontWeight: "bold",
  },
};

const useStyles = makeStyles(() => ({
  personInfo: {
    padding: 20,
  },
  indicator: {
    backgroundColor: "#5B84D3",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#5B84D3",
    color: "white",
    fontWeight: "bold",
    border: "none",
    color: "white",
    borderRadius: 8,
    width: 200,
    height: 40,
    fontSize: 16,
    "&:hover": {
      backgroundColor: "#0758a9",
    },
    marginRight: 12,
    marginLeft: 12,
  },
  deleteIcon: {
    color: "#5B84D3",
  },
}));

const getTabContent = (index) => {
  switch (index) {
    case 0:
      return <PersonalTab />;
    default:
      return <p>Coming soon</p>;
  }
};

const PersonInfo = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const getStyle = (isActive) =>
    isActive ? tabStyle.active_tab : tabStyle.default_tab;

  return (
    <div className={classes.personInfo}>
      <div className={classes.topBar}>
        <PersonMainInfo />
        <div className={classes.topActions}>
          <IconButton>
            <Delete fontSize="large" className={classes.deleteIcon} />
          </IconButton>
          <Button variant="outlined" className={classes.editButton}>
            Խմբագրել
          </Button>
        </div>
      </div>
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
      {getTabContent(activeIndex)}
    </div>
  );
};

export default PersonInfo;
