/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { hot } from 'react-hot-loader/root';
import * as React from 'react';

/* Redux dependencies */
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import * as actions from '../actions';

// import {ipcRenderer} from 'electron';
import Sidebar from './Sidebar';
import Dragbar from './micro/Dragbar';

import Dashboard from '../routes/Dashboard';
import Settings from '../routes/Settings';

import { notifyMessage, productMessage, toastColors } from './micro/Toaster';
import Task from '../routes/Task';
import Profile from '../routes/Profile';
import Proxy from '../routes/Proxy';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import Account from '../routes/Account';

ipcRenderer.send('show-me');
ipcRenderer.send('getFileData');

ipcRenderer.on('productMessage', (e, productData) => {
  productMessage(productData.image, productData.link, productData.message, productData.name, toastColors[productData.color]);
});

ipcRenderer.on('notifyMessage', (e, messageData) => {
  notifyMessage(messageData.title, messageData.message, toastColors[messageData.color]);
});

const Application = (props) => {
  const [editOpen, setEditOpen] = React.useState(false);
  const [qtOpen, setQtOpen] = React.useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={'root '+`${theme}root`}>
      <Sidebar />
      <div className="page__wrapper">
        <Dragbar />
        <Route path="/" exact render={() => <Dashboard editClose={setEditOpen} qtClose={setQtOpen} editOpen={editOpen} qtOpen={qtOpen} />} />
        <Route path="/task" exact render={() => <Task />} />
        <Route path="/profile" exact render={() => <Profile />} />
        <Route path="/account" exact render={() => <Account />} />
        <Route path="/proxies" exact render={() => <Proxy />} />
        <Route path="/settings" exact render={() => <Settings editOpen={editOpen} editClose={setEditOpen} qtOpen={qtOpen} qtClose={setQtOpen} />} />
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
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, actions)(hot(Application));
