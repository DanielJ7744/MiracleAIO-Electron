import * as React from 'react';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { Input } from '../Input';

export const GroupModal = ({ closeModal, addGroup, title }) => {
  const [name, setName] = useState('');
  const { theme } = useContext(ThemeContext);
  const handleAdd = () => {
    addGroup(name);
    closeModal();
  };
  const handleBack = () => {
    closeModal();
  };
  return (
    <div className={`${theme}__GroupModal`}>
      <div className={`${theme}__GroupHeader`}>Create {title} Group</div>
      <div className={`${theme}__createGroup__content`}>
        <Input setValue={setName} value={name} plchldr={title + ' Group Name'} />
        <div className="actionBtns">
          <button type={'button'} className={`${theme}__group__back`} onClick={handleBack}>
            Back
          </button>
          <button type={'button'} className={`${theme}__group__create`} onClick={handleAdd}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
