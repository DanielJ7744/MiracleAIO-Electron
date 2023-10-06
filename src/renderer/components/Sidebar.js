/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Logo from '../assets/logo.png';
import notification from '../assets/dark-notification.png';
import ThemeContext from '../Context/ThemeContext';
import { Notification } from './PopUp/Notification';

/**
 * Navbar/Sidebar
 */

export default () => {
  const [open, showNotification] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}navbar`}>
      <div className="nav-logo">
        <img src={Logo} style={{ marginTop: 22 }} alt="logo" />
        <div className="interval" />
      </div>
      <div className="nav-items">
        <Link exact to="/" className="nav__item">
          <div className="animation__wrapper">
            <div className={`${theme}__home-animation`} />
          </div>
        </Link>
        <Link exact to="/task" className="nav__item">
          <div className="animation__wrapper">
            <div className={`${theme}__task-animation`} />
          </div>
        </Link>
        <Link exact to={'/profile'} className="nav__item">
          <div className="animation__wrapper">
            <div className={`${theme}__profile-animation`} />
          </div>
        </Link>
        <Link exact to="/proxies" className="nav__item">
          <div className="animation__wrapper">
            <div className={`${theme}__proxies-animation`} />
          </div>
        </Link>
        <Link exact to="/settings" className="nav__item">
          <div className="animation__wrapper">
            <div className={`${theme}__settings-animation`} />
          </div>
        </Link>
      </div>
      <div className="nav__footer" style={{ fontWeight: 'bold' }}>
        <span className={`${theme}__notification`} onClick={() => showNotification(true)}>
          <img src={notification} alt="" />
        </span>
      </div>
      {open && <Notification close={() => showNotification(false)} />}
    </div>
  );
};
