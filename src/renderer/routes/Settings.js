/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';

/* Redux dependencies */
import { connect } from 'react-redux';
import * as actions from '../actions';
import Switch from 'react-switch';
import accessKey from '../assets/accessKey.png';
import ThemeContext from '../Context/ThemeContext';
import '../styles/Settings.scss';
import SelectBox from '../components/SelectBox';
import { Input } from '../components/Input';
import deleteIcon from '../assets/delete.png';
import DarkdeleteIcon from '../assets/darkDelete.png';
// eslint-disable-next-line react/prefer-stateless-function
const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [autoBox, setAutoBox] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  const color = changeTheme ? 'light' : 'dark';
  const [autosolve, setAutoSolve] = useState('');
  const [serverProxy, setServerProxy] = useState('');
  const data = Array(2).fill('');
  const AutoSolve = [
    {
      value: 'AutoSolve',
    },
    {
      value: 'AutoSolve',
    },
  ];
  const ChangeThemeHandler = () => {
    setChangeTheme(!changeTheme);
  };
  useEffect(() => {
    setTheme(color);
  }, [color]);
  const handleChange = () => {
    setChecked(!checked);
  };
  console.log(color);
  return (
    <div className={`${theme}Settings`}>
      <div className="settingHeader">
        <div className="settingLeft">
          <span className="title">Settings</span>
          <span className="manage">Manage your delay, webhooks and more !</span>
        </div>
        <div className="settingRight">
          <div className="importPart">
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
          <div className="buttonsPart">
            <button type="button" className="saveBtn">
              Save
            </button>
            <button type="button" className="logsBtn">
              Logs
            </button>
            <button type="button" className="logoutBtn">
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="settingBody">
        <div className="setting__part">
          <div className="testWebhook">
            <div className="webhookHeader">
              <span className="title">Misc. Settings</span>
              <span className="testTitle">Test Webhooks</span>
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.22335 8.00441L7.22437 8.24047C7.23248 9.17679 7.28892 10.0122 7.38626 10.5416C7.38626 10.5511 7.49244 11.0762 7.56008 11.251C7.66626 11.5036 7.85826 11.718 8.09898 11.8539C8.29171 11.9508 8.49389 12 8.70552 12C8.87188 11.9923 9.14624 11.9086 9.34206 11.8384L9.50478 11.776C10.5826 11.3479 12.6429 9.94896 13.432 9.09345L13.4902 9.03365L13.7498 8.75344C13.9135 8.53901 14 8.27685 14 7.99486C14 7.74224 13.9229 7.48963 13.7687 7.28548C13.7226 7.21934 13.6482 7.13449 13.582 7.06279L13.3293 6.79826C12.4597 5.91715 10.5768 4.68122 9.60078 4.27171C9.60078 4.2629 8.99424 4.00955 8.70552 4H8.66697C8.22407 4 7.81026 4.25262 7.59862 4.66091C7.54081 4.77254 7.48535 4.99119 7.44317 5.18322L7.36735 5.5458C7.28081 6.12888 7.22335 7.02332 7.22335 8.00441ZM3.00217 6.98777C2.44872 6.98777 2 7.44087 2 7.99971C2 8.55855 2.44872 9.01164 3.00217 9.01164L5.46832 8.79354C5.9025 8.79354 6.25449 8.43885 6.25449 7.99971C6.25449 7.5613 5.9025 7.20587 5.46832 7.20587L3.00217 6.98777Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.22335 8.00441L7.22437 8.24047C7.23248 9.17679 7.28892 10.0122 7.38626 10.5416C7.38626 10.5511 7.49244 11.0762 7.56008 11.251C7.66626 11.5036 7.85826 11.718 8.09898 11.8539C8.29171 11.9508 8.49389 12 8.70552 12C8.87188 11.9923 9.14624 11.9086 9.34206 11.8384L9.50478 11.776C10.5826 11.3479 12.6429 9.94896 13.432 9.09345L13.4902 9.03365L13.7498 8.75344C13.9135 8.53901 14 8.27685 14 7.99486C14 7.74224 13.9229 7.48963 13.7687 7.28548C13.7226 7.21934 13.6482 7.13449 13.582 7.06279L13.3293 6.79826C12.4597 5.91715 10.5768 4.68122 9.60078 4.27171C9.60078 4.2629 8.99424 4.00955 8.70552 4H8.66697C8.22407 4 7.81026 4.25262 7.59862 4.66091C7.54081 4.77254 7.48535 4.99119 7.44317 5.18322L7.36735 5.5458C7.28081 6.12888 7.22335 7.02332 7.22335 8.00441ZM3.00217 6.98777C2.44872 6.98777 2 7.44087 2 7.99971C2 8.55855 2.44872 9.01164 3.00217 9.01164L5.46832 8.79354C5.9025 8.79354 6.25449 8.43885 6.25449 7.99971C6.25449 7.5613 5.9025 7.20587 5.46832 7.20587L3.00217 6.98777Z"
                    fill="url(#paint0_linear_67_3076)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_67_3076" x1="2" y1="4" x2="13.7584" y2="12.3406" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#74FF79" />
                      <stop offset="1" stopColor="#60FFBC" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.22335 8.00441L7.22437 8.24047C7.23248 9.17679 7.28892 10.0122 7.38626 10.5416C7.38626 10.5511 7.49244 11.0762 7.56008 11.251C7.66626 11.5036 7.85826 11.718 8.09898 11.8539C8.29171 11.9508 8.49389 12 8.70552 12C8.87188 11.9923 9.14624 11.9086 9.34206 11.8384L9.50478 11.776C10.5826 11.3479 12.6429 9.94896 13.432 9.09345L13.4902 9.03365L13.7498 8.75344C13.9135 8.53901 14 8.27685 14 7.99486C14 7.74224 13.9229 7.48963 13.7687 7.28548C13.7226 7.21934 13.6482 7.13449 13.582 7.06279L13.3293 6.79826C12.4597 5.91715 10.5768 4.68122 9.60078 4.27171C9.60078 4.2629 8.99424 4.00955 8.70552 4H8.66697C8.22407 4 7.81026 4.25262 7.59862 4.66091C7.54081 4.77254 7.48535 4.99119 7.44317 5.18322L7.36735 5.5458C7.28081 6.12888 7.22335 7.02332 7.22335 8.00441ZM3.00217 6.98777C2.44872 6.98777 2 7.44087 2 7.99971C2 8.55855 2.44872 9.01164 3.00217 9.01164L5.46832 8.79354C5.9025 8.79354 6.25449 8.43885 6.25449 7.99971C6.25449 7.5613 5.9025 7.20587 5.46832 7.20587L3.00217 6.98777Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.22335 8.00441L7.22437 8.24047C7.23248 9.17679 7.28892 10.0122 7.38626 10.5416C7.38626 10.5511 7.49244 11.0762 7.56008 11.251C7.66626 11.5036 7.85826 11.718 8.09898 11.8539C8.29171 11.9508 8.49389 12 8.70552 12C8.87188 11.9923 9.14624 11.9086 9.34206 11.8384L9.50478 11.776C10.5826 11.3479 12.6429 9.94896 13.432 9.09345L13.4902 9.03365L13.7498 8.75344C13.9135 8.53901 14 8.27685 14 7.99486C14 7.74224 13.9229 7.48963 13.7687 7.28548C13.7226 7.21934 13.6482 7.13449 13.582 7.06279L13.3293 6.79826C12.4597 5.91715 10.5768 4.68122 9.60078 4.27171C9.60078 4.2629 8.99424 4.00955 8.70552 4H8.66697C8.22407 4 7.81026 4.25262 7.59862 4.66091C7.54081 4.77254 7.48535 4.99119 7.44317 5.18322L7.36735 5.5458C7.28081 6.12888 7.22335 7.02332 7.22335 8.00441ZM3.00217 6.98777C2.44872 6.98777 2 7.44087 2 7.99971C2 8.55855 2.44872 9.01164 3.00217 9.01164L5.46832 8.79354C5.9025 8.79354 6.25449 8.43885 6.25449 7.99971C6.25449 7.5613 5.9025 7.20587 5.46832 7.20587L3.00217 6.98777Z"
                    fill="url(#paint0_linear_641_881)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_641_881" x1="2" y1="4" x2="13.7584" y2="12.3406" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00AE31" />
                      <stop offset="1" stopColor="#009355" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
            <div className="webhookBody">
              <div className="success__decline">
                <div className="successWebhook">
                  <span>Success Webhook</span>
                  <input type="text" placeholder="Enter Webhook" className="Enter Webhook" />
                </div>
                <div className="declineWebhook">
                  <span>Decline Webhook</span>
                  <input type="text" placeholder="Enter Webhook" className="Enter Webhook" />
                </div>
              </div>
              <div className="success__decline">
                <div className="successWebhook">
                  <span>Discord RPC</span>
                  <div className="enabled">
                    <div className="enableTitle">Enabled</div>
                    <Switch
                      onChange={handleChange}
                      checked={checked}
                      offColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      onColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      offHandleColor={'#FF8990'}
                      onHandleColor={theme === 'dark' ? '#74FF79' : '#00AE31'}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={15}
                      width={32}
                      className="enableDiscord"
                    />
                  </div>
                </div>
                <div className="declineWebhook">
                  <span>Checkout Sound</span>
                  <div className="select">
                    <div className="clickSelect">Click to select .mp3 file</div>
                    <Switch
                      onChange={() => setCheckout(!checkout)}
                      checked={checkout}
                      offColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      onColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      offHandleColor={'#FF8990'}
                      onHandleColor={theme === 'dark' ? '#74FF79' : '#00AE31'}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={15}
                      width={32}
                      className="enableDiscord"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="otherSettings">
            <div className="otherHeader">
              <span className="title">Other Settings</span>
            </div>
            <div className="otherBody">
              <div className="AutoSolve">
                <div className="title">AutoSolve Access Key</div>
                <div className="token">
                  <input type="text" placeholder="Enter Access Token" />
                  <img src={accessKey} alt="accessKey" />
                </div>
              </div>
              <div className="AutoSolve__Captcha__Theme">
                <div className="autoBox">
                  <span>AutoSolve Box</span>
                  <div className="enabled">
                    <div className="enableTitle">Enabled</div>
                    <Switch
                      onChange={() => setAutoBox(!autoBox)}
                      checked={autoBox}
                      offColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      onColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      offHandleColor={'#FF8990'}
                      onHandleColor={theme === 'dark' ? '#74FF79' : '#00AE31'}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={15}
                      width={32}
                      className="enableDiscord"
                    />
                  </div>
                </div>
                <div className="captchaBox">
                  <span>Click Captcha Box</span>
                  <div className="enabled">
                    <div className="enableTitle">Enabled</div>
                    <Switch
                      onChange={() => setCaptcha(!captcha)}
                      checked={captcha}
                      offColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      onColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      offHandleColor={'#FF8990'}
                      onHandleColor={theme === 'dark' ? '#74FF79' : '#00AE31'}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={15}
                      width={32}
                      className="enableDiscord"
                    />
                  </div>
                </div>
                <div className="themeBox">
                  <span>Theme</span>
                  <div className="enabled">
                    <div className="enableTitle">{color} Mode</div>
                    <Switch
                      onChange={ChangeThemeHandler}
                      checked={changeTheme}
                      offColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      onColor={theme === 'dark' ? '#121215' : '#F0F2F9'}
                      offHandleColor={'#FF8990'}
                      onHandleColor={theme === 'dark' ? '#74FF79' : '#00AE31'}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={15}
                      width={32}
                      className="enableDiscord"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borders" />
      <div className="CaptchaHarvester">
        <div className="captcha__header">
          <div className="TitlePart">
            <span className="title">Captcha Harvester</span>
            <span className="subtitle">2 Harvester</span>
          </div>
          <div className="createPart">
            {theme === 'dark' ? (
              <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" width="2" height="14" rx="1" fill="white" />
                  <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="white" />
                </svg>
              </span>
            ) : (
              <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" width="2" height="14" rx="1" fill="#363636" />
                  <rect y="8" width="2" height="14" rx="1" transform="rotate(-90 0 8)" fill="#363636" />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="borders" />
        <div className="captcha__body">
          {data.map((item, index) => (
            <div className="captcha__content">
              <div className="harvesterHeader">
                <span className="title">Captcha Harvester 1</span>
                <span className="subtitle">Thirdparty</span>
              </div>
              <div className="harvesterbody">
                <SelectBox selectValue={setAutoSolve} setValue={autosolve} option={AutoSolve} defaultOp={'Autosolve'} />
                <Input setValue={setServerProxy} value={serverProxy} plchldr={'Solver Proxy'} />
              </div>
              <div className="harvesterFooter">
                <div className="footer__left">
                  <span className="activeState" />
                  <span className="inUse">In Use</span>
                </div>
                <div className="footer__right">
                  <button type={'button'} className="delete">
                    <span>Delete</span>
                    {theme === 'dark' ? <img src={deleteIcon} alt="" /> : <img src={DarkdeleteIcon} alt="" width="14px" height="14px" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * mapStateToProps
 * maps reducer state to react props
 *
 * @param {any} state - reducer state
 *
 */
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(Settings);
