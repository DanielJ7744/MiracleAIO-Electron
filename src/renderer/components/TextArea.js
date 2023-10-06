// @flow
import * as React from 'react';


export const TextArea = ({ value, setValue,plchldr }) => {
  return (
    <div>
        <textarea
          value={value}
          onChange={(event => {
            setValue(event.target.value);
          })}
          placeholder={plchldr}

        />
    </div>
  );
};
