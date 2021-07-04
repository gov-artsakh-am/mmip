import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';

import { darkBlue } from '../../constants/colors';

const useStyles = makeStyles(() => ({
  personMainInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    marginRight: 16,
  },
  content: {},
  nameSurname: {
    fontSize: 20,
    color: darkBlue,
  },
  birthday: {
    color: darkBlue,
    fontSize: 16,
    opacity: 0.8,
  },
  ssn: {
    color: darkBlue,
    fontSize: 16,
    opacity: 0.8,
  },
}));

const PersonMainInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.personMainInfo}>
      <Avatar
        src="https://i.pinimg.com/originals/92/0d/60/920d60db9c1a9088aa8f1538a84423d9.png"
        className={classes.avatar}
      />
      <div className={classes.content}>
        <Typography className={classes.nameSurname}>
          Սարգիս Հովհաննիսյան Արթուրի
        </Typography>
        <Typography className={classes.birthday}>
          Ծննդյան ամսաթիվ։ 22 Հոկտեմբեր, 1994
        </Typography>
        <Typography className={classes.ssn}>ՀԾՀ։ 46765062</Typography>
      </div>
    </div>
  );
};

export default PersonMainInfo;
