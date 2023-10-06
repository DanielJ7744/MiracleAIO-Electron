// @flow
import * as React from 'react';
/* Redux dependencies */
import { connect } from 'react-redux';
import * as actions from '../actions';
import { useContext, useState } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { useGlobal } from '../Context/GlobalContext';
import DeleteIcon from '../assets/tasks/deleteAll.svg';
import { GroupModal } from '../components/PopUp/GroupModal';
import AccountModal from '../components/PopUp/AccountModal';
import DeleteAll from '../components/PopUp/DeleteAll';
import ProxyGroup from '../components/Proxies/ProxyGroup';
import ProxyItem from '../components/Proxies/ProxyItem';
import '../styles/Proxy.scss';
// eslint-disable-next-line react/prefer-stateless-function
const Proxy = () => {
  const { theme } = useContext(ThemeContext);
  const [groupModal, showGroupModal] = useState(false);
  const [openModal, showModal] = useState(false);
  const className = groupModal || openModal ? 'blur Proxy' : 'Proxy';
  const [deleteAll, setDeleteAll] = useState(false);
  const [title, setTitle] = useState('');
  const { proxiesGroups, setProxiesGroups, activeProxiesGr, setActiveProxiesGr, mode, setMode } = useGlobal();
  const defaultGroup = {
    name: 'Account Group 1',
    // id: AccountGroup.length + 1,
    accountArr: [],
  };
  const closeModal = () => {
    showGroupModal(false);
  };
  const closeAddModal = () => {
    showModal(false);
  };
  const closeDelete = (e) => {
    setDeleteAll(false);
  };
  const addGroup = (name) => {
    // if (AccountGroup.length < 1) {
    //   setActiveAccountGr({
    //     ...defaultGroup,
    //     name,
    //   });
    // }
    // setAccountGroups((prev) => [...prev, {
    //   ...defaultGroup,
    //   name,
    // }]);
  };
  return (
    <div>
      <div className={className}>
        <div className={`${theme}__ProxyHeader`}>
          <div className={`${theme}__ProxyGroup`}>
            <div className="__ProxyGroup__title">
              <span className={`${theme}__groupTitle`}>Proxy Groups</span>
              <span className={`${theme}__subTitle`}> Groups</span>
            </div>
            <div className={`${theme}__createGroup`}>
              <button type={'button'} className={groupModal ? '_createBtn ' + `${theme}__createBtn` : `${theme}__createBtn`} onClick={() => showGroupModal(true)}>
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
          <div className="ProxyContent__header">
            <div className="Proxy_header_left">
              <div className="proxy_header_title">
                <span className={`${theme}__groupTitle`}>Proxies</span>
                <span className={`${theme}__subTitle`}> Accounts</span>
              </div>
              <div className="proxy_header_test_delete">
                <button type={'button'} className="importBtn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="graySvg">
                    <path
                      d="M7.48674 4.86037V2.18769C7.48674 1.90351 7.71341 1.66669 8.00008 1.66669C8.25674 1.66669 8.4742 1.86568 8.50866 2.11774L8.51341 2.18769V4.86037L11.7 4.86057C13.2867 4.86057 14.5902 6.15987 14.6634 7.78029L14.6667 7.92408V11.2836C14.6667 12.9154 13.4084 14.2548 11.8454 14.33L11.7067 14.3334H4.29334C2.70668 14.3334 1.4094 13.0405 1.33657 11.4142L1.33334 11.2698L1.33334 7.9172C1.33334 6.28542 2.58528 4.9395 4.14801 4.86392L4.28668 4.86057H7.48668V9.12883L6.42001 8.02734C6.22001 7.82082 5.89334 7.82082 5.69334 8.02734C5.59334 8.13061 5.54668 8.26829 5.54668 8.40598C5.54668 8.51062 5.57654 8.61967 5.63969 8.71197L5.69334 8.77773L7.63334 10.7879C7.72668 10.8912 7.86001 10.9463 8.00001 10.9463C8.11112 10.9463 8.22223 10.908 8.3102 10.8355L8.36001 10.7879L10.3 8.77773C10.5 8.5712 10.5 8.23387 10.3 8.02734C10.1182 7.83959 9.83169 7.82252 9.63084 7.97614L9.57334 8.02734L8.51334 9.12883V4.86057L7.48674 4.86037Z"
                      fill="#717173"
                    />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hoverSvg">
                    <path
                      d="M7.48674 4.86037V2.18769C7.48674 1.90351 7.71341 1.66669 8.00008 1.66669C8.25674 1.66669 8.4742 1.86568 8.50866 2.11774L8.51341 2.18769V4.86037L11.7 4.86057C13.2867 4.86057 14.5902 6.15987 14.6634 7.78029L14.6667 7.92408V11.2836C14.6667 12.9154 13.4084 14.2548 11.8454 14.33L11.7067 14.3334H4.29334C2.70668 14.3334 1.4094 13.0405 1.33657 11.4142L1.33334 11.2698L1.33334 7.9172C1.33334 6.28542 2.58528 4.9395 4.14801 4.86392L4.28668 4.86057H7.48668V9.12883L6.42001 8.02734C6.22001 7.82082 5.89334 7.82082 5.69334 8.02734C5.59334 8.13061 5.54668 8.26829 5.54668 8.40598C5.54668 8.51062 5.57654 8.61967 5.63969 8.71197L5.69334 8.77773L7.63334 10.7879C7.72668 10.8912 7.86001 10.9463 8.00001 10.9463C8.11112 10.9463 8.22223 10.908 8.3102 10.8355L8.36001 10.7879L10.3 8.77773C10.5 8.5712 10.5 8.23387 10.3 8.02734C10.1182 7.83959 9.83169 7.82252 9.63084 7.97614L9.57334 8.02734L8.51334 9.12883V4.86057L7.48674 4.86037Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button type={'button'} className="exportBtn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="graySvg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6439 3.49081C5.49518 3.69166 5.51226 3.97816 5.70014 4.15998C5.90014 4.35998 6.22681 4.35998 6.42681 4.15998L7.48681 3.09331V5.85331H8.51348V3.09331L9.57348 4.15998L9.63097 4.20957C9.83182 4.35833 10.1183 4.3418 10.3001 4.15998C10.4001 4.05998 10.4535 3.92665 10.4535 3.79331C10.4535 3.66665 10.4001 3.53331 10.3001 3.43331L8.36014 1.48665L8.29966 1.4323C8.21348 1.36745 8.10681 1.33331 8.00014 1.33331C7.86014 1.33331 7.73348 1.38665 7.63348 1.48665L5.69348 3.43331L5.6439 3.49081ZM4.15412 5.85673C2.58528 5.93083 1.33334 7.25054 1.33334 8.85829V12.1684L1.33657 12.31C1.40941 13.9066 2.70687 15.1868 4.30001 15.1868H11.7067L11.8459 15.1835C13.4147 15.1094 14.6667 13.7895 14.6667 12.1752V8.87186L14.6634 8.72964C14.5902 7.12722 13.2867 5.85345 11.7 5.85345H8.51334V9.92321L8.50859 9.99476C8.47413 10.2517 8.25668 10.4455 8.00001 10.4455C7.71334 10.4455 7.48668 10.2149 7.48668 9.92321V5.85345H4.29334L4.15412 5.85673Z"
                      fill="#717173"
                    />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hoverSvg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6439 3.49081C5.49518 3.69166 5.51226 3.97816 5.70014 4.15998C5.90014 4.35998 6.22681 4.35998 6.42681 4.15998L7.48681 3.09331V5.85331H8.51348V3.09331L9.57348 4.15998L9.63097 4.20957C9.83182 4.35833 10.1183 4.3418 10.3001 4.15998C10.4001 4.05998 10.4535 3.92665 10.4535 3.79331C10.4535 3.66665 10.4001 3.53331 10.3001 3.43331L8.36014 1.48665L8.29966 1.4323C8.21348 1.36745 8.10681 1.33331 8.00014 1.33331C7.86014 1.33331 7.73348 1.38665 7.63348 1.48665L5.69348 3.43331L5.6439 3.49081ZM4.15412 5.85673C2.58528 5.93083 1.33334 7.25054 1.33334 8.85829V12.1684L1.33657 12.31C1.40941 13.9066 2.70687 15.1868 4.30001 15.1868H11.7067L11.8459 15.1835C13.4147 15.1094 14.6667 13.7895 14.6667 12.1752V8.87186L14.6634 8.72964C14.5902 7.12722 13.2867 5.85345 11.7 5.85345H8.51334V9.92321L8.50859 9.99476C8.47413 10.2517 8.25668 10.4455 8.00001 10.4455C7.71334 10.4455 7.48668 10.2149 7.48668 9.92321V5.85345H4.29334L4.15412 5.85673Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="Proxy_header_right account_header_right">
              <div className="proxy_header_right_buttons">
                <div className="add__proxy">
                  <button type={'button'} className={openModal ? '_createBtn create_Btn' : 'create_Btn'} onClick={() => showModal(true)}>
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
                <div className="test__delete">
                  <button type={'button'} className="__testAll">
                    <span>Test All</span>
                    {theme === 'dark' ? (
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.15331 5.16137C8.76037 5.55567 8.76037 6.44433 8.15331 6.83863L1.65583 11.0589C0.990555 11.491 0.111123 11.0135 0.111123 10.2202V1.77976C0.111123 0.986479 0.990557 0.509031 1.65583 0.941137L8.15331 5.16137Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.15318 5.16137C8.76025 5.55567 8.76024 6.44433 8.15318 6.83863L1.6557 11.0589C0.990433 11.491 0.111001 11.0135 0.111001 10.2202V1.77976C0.111001 0.986479 0.990435 0.509031 1.65571 0.941137L8.15318 5.16137Z"
                          fill="#363636"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="test__delete">
                  <button type={'button'} className="__deleteAll proxyDelete">
                    <span>Delete All</span>
                    {theme === 'dark' ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8342 3.05848C12.0611 3.05848 12.25 3.24689 12.25 3.48664V3.70831C12.25 3.94222 12.0611 4.13647 11.8342 4.13647H2.16641C1.93892 4.13647 1.75 3.94222 1.75 3.70831V3.48664C1.75 3.24689 1.93892 3.05848 2.16641 3.05848H3.86725C4.21275 3.05848 4.51343 2.8129 4.59115 2.4664L4.68022 2.06857C4.81865 1.52666 5.27421 1.16675 5.79557 1.16675H8.20442C8.72012 1.16675 9.18079 1.52666 9.31411 2.03999L9.40942 2.46582C9.48657 2.8129 9.78725 3.05848 10.1333 3.05848H11.8342ZM10.9701 11.1616C11.1476 9.5067 11.4585 5.57507 11.4585 5.5354C11.4699 5.41524 11.4307 5.30149 11.353 5.20991C11.2696 5.12416 11.1641 5.07341 11.0478 5.07341H2.95663C2.83976 5.07341 2.72856 5.12416 2.65141 5.20991C2.57312 5.30149 2.53454 5.41524 2.54021 5.5354C2.54125 5.54269 2.55241 5.68118 2.57106 5.91272C2.65391 6.94128 2.88467 9.80601 3.03378 11.1616C3.1393 12.1603 3.79456 12.7879 4.74369 12.8107C5.4761 12.8276 6.23064 12.8334 7.0022 12.8334C7.72894 12.8334 8.46703 12.8276 9.22213 12.8107C10.2042 12.7937 10.8589 12.1772 10.9701 11.1616Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8342 3.05848C12.0611 3.05848 12.25 3.24689 12.25 3.48664V3.70831C12.25 3.94222 12.0611 4.13647 11.8342 4.13647H2.16641C1.93892 4.13647 1.75 3.94222 1.75 3.70831V3.48664C1.75 3.24689 1.93892 3.05848 2.16641 3.05848H3.86725C4.21275 3.05848 4.51343 2.8129 4.59115 2.4664L4.68022 2.06857C4.81865 1.52666 5.27421 1.16675 5.79557 1.16675H8.20442C8.72012 1.16675 9.18079 1.52666 9.31411 2.03999L9.40942 2.46582C9.48657 2.8129 9.78725 3.05848 10.1333 3.05848H11.8342ZM10.9701 11.1616C11.1476 9.5067 11.4585 5.57507 11.4585 5.5354C11.4699 5.41524 11.4307 5.30149 11.353 5.20991C11.2696 5.12416 11.1641 5.07341 11.0478 5.07341H2.95663C2.83976 5.07341 2.72856 5.12416 2.65141 5.20991C2.57312 5.30149 2.53454 5.41524 2.54021 5.5354C2.54125 5.54269 2.55241 5.68118 2.57106 5.91272C2.65391 6.94128 2.88467 9.80601 3.03378 11.1616C3.1393 12.1603 3.79456 12.7879 4.74369 12.8107C5.4761 12.8276 6.23064 12.8334 7.0022 12.8334C7.72894 12.8334 8.46703 12.8276 9.22213 12.8107C10.2042 12.7937 10.8589 12.1772 10.9701 11.1616Z"
                          fill="#363636"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="__ProxyContent">
          <div className={`${theme}__ProxyLeft`}>
            <div className="ProxyGroup">
              {proxiesGroups &&
                proxiesGroups.length > 0 &&
                proxiesGroups.map((Profile, index) => (
                  <ProxyGroup key={Profile.id} ProxyGroup={Profile} idx={index} active={Profile.id === activeProxiesGr.id} setActive={setActiveProxiesGr} title={setTitle} callback={setDeleteAll} />
                ))}
            </div>
          </div>
          <div className={`${theme}__Proxies`}>
            <div className="Proxy__content">
              <div className="Proxy__content__body">{activeProxiesGr && activeProxiesGr?.proxiesArr.map((item, i) => <ProxyItem key={i} Proxy={item} />)}</div>
            </div>
          </div>
        </div>
      </div>
      {groupModal && <GroupModal closeModal={closeModal} addGroup={addGroup} title={'Proxy'} />}
      {openModal && <AccountModal closeModal={closeAddModal} title={'Add Proxies'} />}
      {deleteAll && <DeleteAll closeModal={closeDelete} title={title} />}
    </div>
  );
};

/**
 * maps reducer state to react props
 *
 * @param {any} state - reducer state
 *
 */
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(Proxy);
