import React, { useContext, useState } from 'react';

/* Redux dependencies */
import { connect } from 'react-redux';
import * as actions from '../actions';
import ThemeContext from '../Context/ThemeContext';
import { ProfileAccountGroup } from '../components/Profile/ProfileAccountGroup';
// import { ProfileItem } from '../components/Profile/ProfileItem';
import '../styles/Profile.scss';
import { useGlobal } from '../Context/GlobalContext';
import { ProfileItem } from '../components/Profile/ProfileItem';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/tasks/deleteAll.svg';
import Account from './Account';
import { ProfileMain } from '../components/Profile/ProfileMain';

// eslint-disable-next-line react/prefer-stateless-function
const Profile = () => {

  const {
    mode,
    setMode
  } = useGlobal();
  return (
    <div>
      {
        mode==='Profile'?
          <ProfileMain />:<Account />
      }
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

export default connect(mapStateToProps, actions)(Profile);
