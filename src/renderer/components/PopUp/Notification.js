// @flow
import * as React from 'react';
import notification from '../../assets/dark-notification.png';
import deleteIcon from '../../assets/delete.png';
import deleteLight from '../../assets/delete.png';
import '../../styles/notification.scss';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { useGlobal } from '../../Context/GlobalContext';

export const Notification = ({ close }) => {
  const { theme } = useContext(ThemeContext);
  const { notificationData } = useGlobal();
  return (
    <div className={`${theme}Notification`}>
      <div className="headerTitle">
        <span>Notifications</span>
        <img src={notification} alt="" />
      </div>
      <div className="notificationBody">
        <div className="notificationContent">
          {notificationData.map((item, index) => (
            <div className="content" key={index}>
              <div className="header">
                <div className="site__status">
                  <span className="status">{item.statusText}</span>
                  <span className="siteName">{item.siteName}</span>
                </div>
                <img src={item.product} alt="" />
              </div>
              <div className="borders" />
              <div className="body">
                <span className="region">{item.region} | </span>
                <span className="price">${item.price}</span>
                <span className="profile">| {item.profile} | </span>
                <span className="time"> {item.time}m ago</span>
              </div>
              <div className="footer">
                <span className="brand">{item.brand}</span>
                <span className="productName">{item.productName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="notificationFooter">
        <div className="clearBtn" onClick={close}>
          <span>Clear</span>
          {theme === 'dark' ? (
            <img src={deleteIcon} alt="" />
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8342 3.05839C12.0611 3.05839 12.25 3.2468 12.25 3.48655V3.70821C12.25 3.94213 12.0611 4.13638 11.8342 4.13638H2.16641C1.93892 4.13638 1.75 3.94213 1.75 3.70821V3.48655C1.75 3.2468 1.93892 3.05839 2.16641 3.05839H3.86725C4.21275 3.05839 4.51343 2.81281 4.59115 2.46631L4.68022 2.06848C4.81865 1.52657 5.27421 1.16666 5.79557 1.16666H8.20442C8.72012 1.16666 9.18079 1.52657 9.31411 2.0399L9.40942 2.46573C9.48657 2.81281 9.78725 3.05839 10.1333 3.05839H11.8342ZM10.9701 11.1615C11.1476 9.50661 11.4585 5.57498 11.4585 5.53531C11.4699 5.41515 11.4307 5.3014 11.353 5.20982C11.2696 5.12407 11.1641 5.07332 11.0478 5.07332H2.95663C2.83976 5.07332 2.72856 5.12407 2.65141 5.20982C2.57312 5.3014 2.53454 5.41515 2.54021 5.53531C2.54125 5.5426 2.55241 5.68109 2.57106 5.91263C2.65391 6.94119 2.88467 9.80592 3.03378 11.1615C3.1393 12.1602 3.79456 12.7878 4.74369 12.8106C5.4761 12.8275 6.23064 12.8333 7.0022 12.8333C7.72894 12.8333 8.46703 12.8275 9.22213 12.8106C10.2042 12.7937 10.8589 12.1771 10.9701 11.1615Z"
                fill="#363636"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
