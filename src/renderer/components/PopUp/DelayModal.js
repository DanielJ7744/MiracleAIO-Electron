import * as React from 'react';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { Input } from '../Input';

export const DelayModal = ({ closeModal }) => {
  const { theme } = useContext(ThemeContext);
  const [ErrorDelay, setErrorDelay] = useState('');
  const [CheckoutDelay, setCheckoutDelay] = useState('');
  const handleAdd = () => {
    console.log(ErrorDelay);
    closeModal();
  };
  const handleBack = () => {
    closeModal();
  };
  return (
    <div className={'DelayModal ' + `${theme}Modal`}>
      <div className={`${theme}__Header`}>Delays</div>
      <div className={`${theme}__create__content`}>
        <div className="taskInputContent">
          <Input value={ErrorDelay} setValue={setErrorDelay} plchldr="Error Delay" />
          <Input value={CheckoutDelay} setValue={setCheckoutDelay} plchldr="Checkout Delay" />
        </div>
      </div>
      <div className="actionBtns">
        <button type={'button'} className={`${theme}__group__back`} onClick={handleBack}>
          Back
        </button>
        <button type={'button'} className={`${theme}__group__create`} onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};
