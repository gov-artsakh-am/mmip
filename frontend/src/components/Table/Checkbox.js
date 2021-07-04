import React from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import checkboxUnchecked from '../../assets/vectors/checkboxUnchecked.svg';
import checkboxChecked from '../../assets/vectors/checkboxChecked.svg';

const Checkbox = ({ isChecked }) => (
  <MaterialCheckbox
    disableRipple
    checkedIcon={<img src={checkboxUnchecked} alt="checkbox" />}
    icon={<img src={checkboxChecked} alt="checkbox" />}
    checked={isChecked}
  />
);

export default Checkbox;
