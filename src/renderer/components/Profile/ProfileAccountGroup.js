// @flow
import * as React from 'react';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import deleteIcon from '../../assets/tasks/delete.svg';
import deleteActive from '../../assets/profile/deleteActive.png';
import '../../styles/Profile.scss';
import { useGlobal } from '../../Context/GlobalContext';

export const ProfileAccountGroup = ({ ProfileGroup, idx, active, setActive, callback, title }) => {
  const { mode } = useGlobal();
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const className = active ? 'ProfileGroup__content ' + `${theme}activeProfileGroup` : 'ProfileGroup__content';
  const HandleSelect = () => {
    setActive(ProfileGroup);
  };
  const GroupDelete = () => {
    setOpen(true);
    callback(open);
    title(ProfileGroup.name);
  };
  return (
    <div className={className}>
      <div className={`${theme}ProfilesGroup`} onClick={HandleSelect}>
        <div className={`${theme}__ProfileGroup__left`}>
          <div className={`${theme}__ProfileGroup__header`}>
            <span className={`${theme}__name`}>{ProfileGroup.name}</span>
            {mode === 'Profile' ? (
              <span className={`${theme}__subtitle`}>{ProfileGroup.profilesArr.length} Profiles</span>
            ) : (
              <span className={`${theme}__subtitle`}>{ProfileGroup.accountArr.length} Accounts</span>
            )}
          </div>
        </div>
        <div className={`${theme}__ProfileGroup__right`}>{active ? <img src={deleteActive} alt="" onClick={GroupDelete} /> : <img src={deleteIcon} alt="" onClick={GroupDelete} />}</div>
      </div>
    </div>
  );
};
export default ProfileAccountGroup;
