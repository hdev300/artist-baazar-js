import React, { useEffect, useState } from 'react';
import { MyDropDownProp } from '../../../types/components.types';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { errorTextColor } from '~/utility/utils';

const MyDropDown = (props) => {
  const {
    size,
    label,
    setTouched,
    fullWidth,
    className,
    touched,
    error,
    value,
    onChange,
    disabled,
    options,
  } = props;

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (value) {
      setErrorMessage('');
    }
    if (error) {
      setErrorMessage(`${label} is Required`);
    }
  }, [value, error]);

  console.log('VALUE', value);

  return (
    <FormControl
      fullWidth={fullWidth || false}
      size={size || 'small'}
      onFocus={() => {
        if (!value) {
          setErrorMessage(`${label} is Required`);
        }
      }}
      disabled={disabled}
      error={Boolean(touched && error)}
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{ color: Boolean(touched && error) ? errorTextColor : '' }}
      >
        {' '}
        {label ? label : null}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value || ''}
        label={label || ''}
        onChange={onChange}
      >
        {options?.length > 0 &&
          options.map((item, index) => (
            <MenuItem
              value={item?.value}
              key={index}
              disabled={item?.itemDisabled}
            >
              {item?.itemDisabled}
              {item?.label}
            </MenuItem>
          ))}
      </Select>
      {errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default MyDropDown;

