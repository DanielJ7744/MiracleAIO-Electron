import * as React from 'react';
import '../styles/InputBox.scss';
export const Input = ({ plchldr, setValue, value }) => {
  return (
    <input
      id="form-input-box"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="text"
      placeholder={plchldr}
    />
  );
};
