import React, { useContext, useState } from 'react';

/* Redux dependencies */
import { connect } from 'react-redux';
import * as actions from '../actions';
import ThemeContext from '../Context/ThemeContext';
import { useGlobal } from '../Context/GlobalContext';
import { TaskGroup } from '../components/task/TaskGroup';
import '../styles/Task.scss';
import { TaskItem } from '../components/task/TaskItem';
import { GroupModal } from '../components/PopUp/GroupModal';
import { TaskModal } from '../components/PopUp/TaskModal';
import { DelayModal } from '../components/PopUp/DelayModal';
import startAll from '../assets/tasks/start.svg';
import stopAll from '../assets/tasks/stop.svg';
import EditAll from '../assets/tasks/edit.svg';
import DeleteIcon from '../assets/tasks/deleteAll.svg';
import DeleteAll from '../components/PopUp/DeleteAll';
// eslint-disable-next-line react/prefer-stateless-function
const Task = () => {
  const [modal, showModal] = useState(false);
  const [popup, setModal] = useState(false);
  const [delay, setDelay] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [title, setTitle] = useState('');
  const { theme } = useContext(ThemeContext);
  const className = modal || popup || delay || deleteAll ? 'blur ' + `${theme}__Task` : `${theme}__Task`;
  const { activeTaskGr, tasks, setTasks, setActiveTaskGr } = useGlobal();
  const defaultGroup = {
    name: 'Task Group 1',
    id: tasks.length + 1,
    taskArr: [],
  };
  const closeModal = (e) => {
    showModal(false);
  };
  const closePopup = (e) => {
    setModal(false);
  };
  const closeDelay = (e) => {
    setDelay(false);
  };
  const closeDelete = (e) => {
    setDeleteAll(false);
  };
  const addGroup = (name) => {
    if (tasks.length < 1) {
      setActiveTaskGr({
        ...defaultGroup,
        name,
      });
    }
    setTasks((prev) => [
      ...prev,
      {
        ...defaultGroup,
        name,
      },
    ]);
  };
  console.log(deleteAll);
  return (
    <div>
      <div className={className}>
        <div className="__taskHeader">
          <div className={`${theme}__taskGroup`}>
            <div className="__taskGroup__title">
              <span className={`${theme}__groupTitle`}>Task Groups</span>
              <span className={`${theme}__subTitle`}>31 Groups</span>
            </div>
            <div className={`${theme}__createGroup`}>
              <button type={'button'} className={`${theme}__createBtn`} onClick={() => showModal(true)}>
                {theme === 'dark' ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" width="2" height="14" rx="1" fill="white" />
                    <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="white" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" width="2" height="14" rx="1" fill="#363636" />
                    <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="#363636" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="taskContent__header">
            <div className="task_header_left">
              <span className={`${theme}__groupTitle`}>Tasks</span>
              <span className={`${theme}__subTitle`}> Tasks</span>
            </div>
            <div className="task_header_right">
              <div className="add__delayGroup">
                <button type={'button'} className="create_Btn" onClick={() => setModal(true)}>
                  {theme === 'dark' ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" width="2" height="14" rx="1" fill="white" />
                      <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="white" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" width="2" height="14" rx="1" fill="#363636" />
                      <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="#363636" />
                    </svg>
                  )}
                </button>
                <button type={'button'} className="delayBtn" onClick={() => setDelay(true)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.4 6.14667C12.1933 6.14667 11.7 5.29333 12.3 4.24667C12.6467 3.64 12.44 2.86667 11.8333 2.52L10.68 1.86C10.1533 1.54666 9.47334 1.73333 9.16001 2.26L9.08668 2.38666C8.48668 3.43333 7.50001 3.43333 6.89334 2.38666L6.82001 2.26C6.52001 1.73333 5.84001 1.54666 5.31334 1.86L4.16001 2.52C3.55334 2.86667 3.34668 3.64667 3.69334 4.25333C4.30001 5.29333 3.80668 6.14667 2.60001 6.14667C1.90668 6.14667 1.33334 6.71333 1.33334 7.41333V8.58667C1.33334 9.28 1.90001 9.85333 2.60001 9.85333C3.80668 9.85333 4.30001 10.7067 3.69334 11.7533C3.34668 12.36 3.55334 13.1333 4.16001 13.48L5.31334 14.14C5.84001 14.4533 6.52001 14.2667 6.83334 13.74L6.90668 13.6133C7.50668 12.5667 8.49334 12.5667 9.10001 13.6133L9.17334 13.74C9.48668 14.2667 10.1667 14.4533 10.6933 14.14L11.8467 13.48C12.4533 13.1333 12.66 12.3533 12.3133 11.7533C11.7067 10.7067 12.2 9.85333 13.4067 9.85333C14.1 9.85333 14.6733 9.28666 14.6733 8.58667V7.41333C14.6667 6.72 14.1 6.14667 13.4 6.14667ZM8.00001 10.1667C6.80668 10.1667 5.83334 9.19333 5.83334 8C5.83334 6.80666 6.80668 5.83333 8.00001 5.83333C9.19334 5.83333 10.1667 6.80666 10.1667 8C10.1667 9.19333 9.19334 10.1667 8.00001 10.1667Z"
                      fill="#717173"
                    />
                  </svg>
                </button>
              </div>
              <div className="borders" />
              <div className="import__export">
                <button type={'button'} className="importBtn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.48674 4.86037V2.18769C7.48674 1.90351 7.71341 1.66669 8.00008 1.66669C8.25674 1.66669 8.4742 1.86568 8.50866 2.11774L8.51341 2.18769V4.86037L11.7 4.86057C13.2867 4.86057 14.5902 6.15987 14.6634 7.78029L14.6667 7.92408V11.2836C14.6667 12.9154 13.4084 14.2548 11.8454 14.33L11.7067 14.3334H4.29334C2.70668 14.3334 1.4094 13.0405 1.33657 11.4142L1.33334 11.2698L1.33334 7.9172C1.33334 6.28542 2.58528 4.9395 4.14801 4.86392L4.28668 4.86057H7.48668V9.12883L6.42001 8.02734C6.22001 7.82082 5.89334 7.82082 5.69334 8.02734C5.59334 8.13061 5.54668 8.26829 5.54668 8.40598C5.54668 8.51062 5.57654 8.61967 5.63969 8.71197L5.69334 8.77773L7.63334 10.7879C7.72668 10.8912 7.86001 10.9463 8.00001 10.9463C8.11112 10.9463 8.22223 10.908 8.3102 10.8355L8.36001 10.7879L10.3 8.77773C10.5 8.5712 10.5 8.23387 10.3 8.02734C10.1182 7.83959 9.83169 7.82252 9.63084 7.97614L9.57334 8.02734L8.51334 9.12883V4.86057L7.48674 4.86037Z"
                      fill="#717173"
                    />
                  </svg>
                </button>
                <button type={'button'} className="exportBtn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6439 3.49081C5.49518 3.69166 5.51226 3.97816 5.70014 4.15998C5.90014 4.35998 6.22681 4.35998 6.42681 4.15998L7.48681 3.09331V5.85331H8.51348V3.09331L9.57348 4.15998L9.63097 4.20957C9.83182 4.35833 10.1183 4.3418 10.3001 4.15998C10.4001 4.05998 10.4535 3.92665 10.4535 3.79331C10.4535 3.66665 10.4001 3.53331 10.3001 3.43331L8.36014 1.48665L8.29966 1.4323C8.21348 1.36745 8.10681 1.33331 8.00014 1.33331C7.86014 1.33331 7.73348 1.38665 7.63348 1.48665L5.69348 3.43331L5.6439 3.49081ZM4.15412 5.85673C2.58528 5.93083 1.33334 7.25054 1.33334 8.85829V12.1684L1.33657 12.31C1.40941 13.9066 2.70687 15.1868 4.30001 15.1868H11.7067L11.8459 15.1835C13.4147 15.1094 14.6667 13.7895 14.6667 12.1752V8.87186L14.6634 8.72964C14.5902 7.12722 13.2867 5.85345 11.7 5.85345H8.51334V9.92321L8.50859 9.99476C8.47413 10.2517 8.25668 10.4455 8.00001 10.4455C7.71334 10.4455 7.48668 10.2149 7.48668 9.92321V5.85345H4.29334L4.15412 5.85673Z"
                      fill="#717173"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="__taskContent">
          <div className={`${theme}__taskLeft`}>
            <div className="taskGroup">
              {tasks &&
                tasks.length > 0 &&
                tasks.map((task, index) => (
                  <TaskGroup key={task.id} taskGroup={task} idx={index} active={task.id === activeTaskGr.id} setActive={setActiveTaskGr} callback={setDeleteAll} title={setTitle} />
                ))}
            </div>
          </div>
          <div className={`${theme}_tasks`}>
            <div className="task__content">
              <div className="task__content__header">
                <span className="header_id">ID</span>
                <span className="header__store">Store</span>
                <span className="header__product">PRODUCT</span>
                <span className="header__mode">MODE</span>
                <span className="header__proxy">PROXY</span>
                <span className="header__profile">PROFILE</span>
                <span className="header__status">STATUS</span>
                <span className="" />
              </div>
              <div className="task__content__body">{activeTaskGr && activeTaskGr?.taskArr.map((item, i) => <TaskItem key={i} task={item} />)}</div>
            </div>
          </div>
        </div>
        <div className="task__content__footer">
          <div className="footerBtn">
            <button type={'button'} className="__startAll">
              <span>Start All</span>
              {theme === 'dark' ? (
                <img src={startAll} alt="" />
              ) : (
                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.15318 5.16137C8.76025 5.55567 8.76024 6.44433 8.15318 6.83863L1.6557 11.0589C0.990433 11.491 0.111001 11.0135 0.111001 10.2202V1.77976C0.111001 0.986479 0.990435 0.509031 1.65571 0.941137L8.15318 5.16137Z"
                    fill="#363636"
                  />
                </svg>
              )}
            </button>
            <button type={'button'} className="__stopAll">
              <span>Stop All</span>
              {theme === 'dark' ? (
                <img src={stopAll} alt="" />
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" rx="2" fill="#363636" />
                </svg>
              )}
            </button>
            <button type={'button'} className="__editAll">
              <span>Edit All</span>
              {theme === 'dark' ? (
                <img src={EditAll} alt="" />
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.46957 11.6829L10.595 5.05484C10.8735 4.69741 10.9726 4.28417 10.8797 3.86341C10.7992 3.4809 10.564 3.1172 10.2112 2.84129L9.35075 2.15779C8.60175 1.56207 7.67324 1.62478 7.14089 2.30828L6.56521 3.05512C6.49093 3.14855 6.5095 3.28651 6.60235 3.36176C6.60235 3.36176 8.05702 4.5281 8.08797 4.55318C8.18701 4.64724 8.26129 4.77266 8.27986 4.92315C8.31081 5.21788 8.10654 5.49379 7.80323 5.53141C7.66086 5.55022 7.52467 5.50633 7.42563 5.42481L5.89668 4.2083C5.8224 4.15249 5.71098 4.1644 5.64908 4.23965L2.0155 8.94266C1.78027 9.23738 1.6998 9.61989 1.78027 9.98986L2.24453 12.0027C2.26929 12.1093 2.36214 12.1846 2.47356 12.1846L4.51629 12.1595C4.8877 12.1532 5.23434 11.9839 5.46957 11.6829ZM8.32979 11.0561H11.6607C11.9857 11.0561 12.25 11.3239 12.25 11.6531C12.25 11.9829 11.9857 12.2501 11.6607 12.2501H8.32979C8.00481 12.2501 7.7405 11.9829 7.7405 11.6531C7.7405 11.3239 8.00481 11.0561 8.32979 11.0561Z"
                    fill="#363636"
                  />
                </svg>
              )}
            </button>
            <button type={'button'} className="__deleteAll" onClick={() => [setDeleteAll(true), setTitle('all Tasks')]}>
              <span>Delete All</span>
              {theme === 'dark' ? (
                <img src={DeleteIcon} alt="" />
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8342 3.05836C12.0611 3.05836 12.25 3.24677 12.25 3.48652V3.70818C12.25 3.9421 12.0611 4.13635 11.8342 4.13635H2.16641C1.93892 4.13635 1.75 3.9421 1.75 3.70818V3.48652C1.75 3.24677 1.93892 3.05836 2.16641 3.05836H3.86725C4.21275 3.05836 4.51343 2.81278 4.59115 2.46628L4.68022 2.06845C4.81865 1.52654 5.27421 1.16663 5.79557 1.16663H8.20442C8.72012 1.16663 9.18079 1.52654 9.31411 2.03987L9.40942 2.4657C9.48657 2.81278 9.78725 3.05836 10.1333 3.05836H11.8342ZM10.9701 11.1615C11.1476 9.50658 11.4585 5.57495 11.4585 5.53528C11.4699 5.41512 11.4307 5.30137 11.353 5.20979C11.2696 5.12404 11.1641 5.07329 11.0478 5.07329H2.95663C2.83976 5.07329 2.72856 5.12404 2.65141 5.20979C2.57312 5.30137 2.53454 5.41512 2.54021 5.53528C2.54125 5.54257 2.55241 5.68106 2.57106 5.9126C2.65391 6.94116 2.88467 9.80589 3.03378 11.1615C3.1393 12.1601 3.79456 12.7878 4.74369 12.8105C5.4761 12.8275 6.23064 12.8333 7.0022 12.8333C7.72894 12.8333 8.46703 12.8275 9.22213 12.8105C10.2042 12.7936 10.8589 12.177 10.9701 11.1615Z"
                    fill="#363636"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {modal && <GroupModal closeModal={closeModal} addGroup={addGroup} title={'Task'} />}
      {popup && <TaskModal closeModal={closePopup} />}
      {delay && <DelayModal closeModal={closeDelay} />}
      {deleteAll && <DeleteAll closeModal={closeDelete} title={title} />}
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, actions)(Task);
