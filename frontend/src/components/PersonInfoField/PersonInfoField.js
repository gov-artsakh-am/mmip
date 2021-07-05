import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  personInfoField: {
    backgroundColor: 'white',
    padding: '12px 24px',
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#131F33',
    marginBottom: 6,
  },
  value: {
    color: '#172E56',
  },
}));

const PersonInfoField = ({ label, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.personInfoField}>
      <Typography className={classes.label}>{label}</Typography>
      <Typography>{value}</Typography>
    </div>
  );
};

export default PersonInfoField;
