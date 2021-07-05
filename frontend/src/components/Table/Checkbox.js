import React from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import checkboxUnchecked from '../../assets/vectors/checkboxUnchecked.svg';
import checkboxChecked from '../../assets/vectors/checkboxChecked.svg';

const Checkbox = ({ checked, onChange }) => (
  <MaterialCheckbox
    disableRipple
    checkedIcon={<img src={checkboxChecked} alt="checkbox" />}
    icon={<img src={checkboxUnchecked} alt="checkbox" />}
    checked={checked}
    onChange={onChange}
  />
);

export default Checkbox;
