import React from 'react';
import { PhoneInputProps } from '../../../types/components.types';
import FormHelperText from '@mui/material/FormHelperText';
import { ParsedCountry, PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { errorTextColor, removeCountryCode } from '~/utility/utils';

const MyPhoneInput = (props) => {
  const { mobileNo, countryCode, onChange, onFocus, touched, errors } = props;

  let testVal = '';
  if (mobileNo && countryCode) {
    const mobile = removeCountryCode(mobileNo, countryCode);
    testVal += `${countryCode} ${mobile}`;
  }
  console.log('testVal : ', testVal);

  return (
    <>
      <PhoneInput
        defaultCountry="in"
        name="mobileNo"
        value={testVal}
        inputStyle={{ flexGrow: 1, width: '100%', height: '40px' }}
        placeholder="Mobile Number"
        forceDialCode
        onChange={(phone, data) => {
          onChange({
            phone,
            countryCode: `+${data.country.dialCode}`,
          });
        }}
      />
      {touched && errors && (
        <FormHelperText sx={{ color: 'red' }}>{errors}</FormHelperText>
      )}
    </>
  );
};

export default MyPhoneInput;

