// @flow
import * as React from 'react';
import '../styles/SelectBox.scss';
export const SelectBox = ({ selectValue, setValue, defaultOp, option }) => {
  return (
    <select
      onChange={(e) => {
        setValue(e.target.value);
      }}
      required
    >
      <option value="default">{defaultOp}</option>
      {option.map((item, index) => (
        <option value={item.value} key={index}>
          {item.value}
        </option>
      ))}
    </select>
  );
};
export default SelectBox;
