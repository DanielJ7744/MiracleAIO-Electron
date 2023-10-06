// @flow
import * as React from 'react';
/* task action icon*/
import startIcon from '../../assets/tasks/start__gray.png';
import editIcon from '../../assets/tasks/edit.png';
import deleteIcon from '../../assets/tasks/delete.svg';
import { useState } from 'react';

export const TaskItem = ({ task }) => {
  const [taskItem, setTaskItem ] = useState(task);
  const [taskIcons, setTaskIcons ] = useState(task.icon)
  const StartItem = () => {
    console.log('stated the task');
  };
  const EditItem = () => {
    console.log('stated the task');
  };
  const DeleteItem = () => {
      console.log(taskIcons);
    setTaskItem('');
  };
  return (
    <div className='task__item__content'>
      <div className='task__item__body'>
        <span className='content_id'>{taskItem.id}</span>
        <span className='content__store'>{taskItem.site}</span>
        <span className='content__product'>{taskItem.product}</span>
        <span className='content__mode'>{taskItem.mode}</span>
        <span className='content__proxy'>{taskItem.proxy}</span>
        <span className='content__profile'>{taskItem.profile}</span>
        <span className='content__status'>{taskItem.status}</span>
        <span className='content__action'>
          <img src={startIcon} alt='start' onClick={StartItem} />
          <img src={editIcon} alt='edit' onClick={EditItem} />
          <img src={deleteIcon} alt='delete' onClick={DeleteItem} />
          </span>
      </div>
    </div>
  );
};
