import * as React from 'react';
import Add from '../../assets/tasks/add.png';
import success from '../../assets/tasks/success.png';
import decline from '../../assets/tasks/decline.png';
import deleteIcon from '../../assets/tasks/delete.svg';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { useGlobal } from '../../Context/GlobalContext';

export const deleteGroup = (arr, id) => {
  return arr.filter((item) => item.id !== id);
};
export default deleteGroup;
export const TaskGroup = ({ taskGroup, setActive, active = false, idx, callback, title }) => {
  const { theme } = useContext(ThemeContext);

  function handleSelect() {
    setActive(taskGroup);
  }

  const { tasks, setTasks, activeTaskGr, setActiveTaskGr } = useGlobal();
  const [deleteTitle, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const className = active ? 'taskGroup__content ' + `${theme}activeTaskGroup` : 'taskGroup__content';
  const GroupDelete = () => {
    setOpen(true);
    callback(open);
    title(taskGroup.name);
  };
  const Delete = async () => {
    const cleanedArray = deleteGroup(tasks, taskGroup.id);
    await setTasks(cleanedArray);
    if (taskGroup.id === activeTaskGr.id) {
      setActiveTaskGr({ ...cleanedArray[0] });
    }
  };
  return (
    <div className={className} onClick={handleSelect}>
      <div className={`${theme}tasksGroup`}>
        <div className={`${theme}__taskGroup__left`}>
          <div className={`${theme}__taskGroup__header`}>
            <span className={`${theme}__name`}>{taskGroup.name} </span>
            <span className={`${theme}__taskNumber`}>({taskGroup.taskArr.length})</span>
            <span className="taskActive" />
          </div>
          <div className={`${theme}__taskGroup__content`}>
            <div className="tasks__cart__part">
              {theme === 'dark' ? (
                <img src={Add} alt="" />
              ) : (
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" width="1" height="7" fill="url(#paint0_linear_123:4136)" />
                  <rect y="4" width="1" height="7" transform="rotate(-90 0 4)" fill="url(#paint1_linear_123:4136)" />
                  <defs>
                    <linearGradient id="paint0_linear_123:4136" x1="3" y1="0" x2="4.4662" y2="0.0990506" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#50E4F8" />
                      <stop offset="1" stopColor="#00C2FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_123:4136" x1="0" y1="4" x2="1.4662" y2="4.09905" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#50E4F8" />
                      <stop offset="1" stopColor="#00C2FF" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
              <span>31</span>
            </div>
            <div className="tasks__success__part">
              <img src={success} alt="" />
              <span>31</span>
            </div>
            <div className="tasks__decline__part">
              <img src={decline} alt="" />
              <span>31</span>
            </div>
          </div>
        </div>
        <div className={`${theme}__taskGroup__right`}>
          <img src={deleteIcon} alt="" onClick={GroupDelete} />
        </div>
      </div>
    </div>
  );
};
