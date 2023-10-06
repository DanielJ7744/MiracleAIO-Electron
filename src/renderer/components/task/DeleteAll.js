// @flow
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import DeleteIcon from '../../assets/tasks/deleteAll.svg';

export const DeleteAll = ({closeModal,title}) => {
  const { theme } = useContext(ThemeContext);
  const handleDelete = () => {
    console.log('deleted');
    closeModal();
  }
  const handleBack = () => {
    closeModal();
  };
  return (
    <div className="Modal deleteModal">
      <div className={`${theme}__Header`}>
        Are you sure to delete {title} ?
      </div>
      <div className='actionBtns'>
        <button type={'button'} className={`${theme}__group__back`} onClick={handleBack}>Back</button>
        <button type={'button'} className={`${theme}__deleteAll`} onClick={handleDelete}>
          <span>Delete</span>
          <img src={DeleteIcon} alt='' />
        </button>
      </div>
    </div>
  );
};
export default DeleteAll
