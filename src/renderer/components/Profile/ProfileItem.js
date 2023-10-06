// @flow
import * as React from 'react';

import profileIcon from '../../assets/profile/profile.svg';
import masterCard from '../../assets/profile/mastercard.png';
import EyeIcon from '../../assets/tasks/eye.svg';
import EditIcon from '../../assets/tasks/edit.svg';
import DeleteIcon from '../../assets/tasks/deleteAll.svg';
import AEditIcon from '../../assets/tasks/Aedit.svg';
import ADeleteIcon from '../../assets/tasks/Adelete.svg';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { useGlobal } from '../../Context/GlobalContext';

export const ProfileItem = ({ Profile, active, setActive }) => {
  const { theme } = useContext(ThemeContext);
  const { mode } = useGlobal();

  const header = 'ItemHeader';
  const profileItem = active ? 'profileItem activeProfileItem' : 'profileItem';
  const accountItem = mode === 'Profile' ? profileItem : 'accountItem';
  const HandleSelect = () => {
    setActive(Profile);
  };
  return (
    <div className={accountItem} onClick={HandleSelect}>
      {mode === 'Profile' && (
        <div className={header}>
          <span className={`${theme}__name`}>{Profile.name}</span>
          <div className="itemRight">
            {theme === 'dark' ? <img src={profileIcon} alt="" /> : <img src={masterCard} alt="" />}

            <span>{Profile.key}</span>
          </div>
        </div>
      )}

      <div className="ItemContent">
        {mode === 'Profile' && <span className="cardTitle">{Profile.cardholder}</span>}

        {mode === 'Profile' && <div className="borders" />}
        {mode === 'Profile' ? <span className={`${theme}__phone`}>{Profile.phone}</span> : <span className={`${theme}__phone`}>{Profile.email}</span>}
      </div>
      <div className="Item__Footer">
        {mode === 'Profile' ? <span className={`${theme}__email`}>{Profile.email}</span> : <span className={`${theme}__email`}>{Profile.password}</span>}
        {mode === 'Profile' ? (
          <div className="Edit__Delete">
            <img src={EditIcon} alt="" />
            <img src={DeleteIcon} alt="" />
          </div>
        ) : (
          <div className="Edit__Delete">
            <img src={EyeIcon} alt="" />
            <img src={AEditIcon} alt="" />
            <img src={ADeleteIcon} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
