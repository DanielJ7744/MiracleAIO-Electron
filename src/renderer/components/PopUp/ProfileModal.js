// @flow
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';

export const ProfileModal = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Modal ProfileModal">
      <div className={`${theme}__taskHeader`}>Create Profile</div>
    </div>
  );
};

export default ProfileModal;
