// @flow
import * as React from 'react';
import { useContext, useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { TextArea } from '../TextArea';
import { useGlobal } from '../../Context/GlobalContext';

export const AccountModal = ({ closeModal, title }) => {
  const { AccountGroup, setAccountGroups, activeAccountGr } = useGlobal();
  const { theme } = useContext(ThemeContext);
  const [accounts, setAccounts] = useState('');
  const [id, setID] = useState(0);
  const [Account, setAccount] = useState([]);
  const handleAdd = () => {
    setID((prevState) => {
      return prevState + 1;
    });
    const InputValue = accounts.toString().split('\n');
    const data = InputValue.map((item) => {
      return item;
    });
    setAccount((prevState) => [
      ...prevState,
      {
        id: id + 1,
        email: 'Email@emailadress.com',
        password: 'Password123',
      },
    ]);
    const newAccount = {
      id: id + 1,
      email: data[0],
      password: data[1],
    };
    AccountGroup.forEach(function(account) {
      if (account.id === activeAccountGr.id) {
        account.accountArr.push(newAccount);
      }
    });

    console.log();
    closeModal();
  };
  const handleBack = () => {
    closeModal();
  };
  return (
    <div className={`${theme}Modal`}>
      <div className={`${theme}__Header`}>{title}</div>
      <div className={`${theme}__create__content`}>
        <div className="taskInputContent">
          <TextArea value={accounts} setValue={setAccounts} plchldr={title === 'Add Accounts' ? 'Enter Accounts\n' + 'Email:Password' : 'Enter Proxies\n' + 'IP:PORT:USER:PASS'} />
        </div>
        <div className="actionBtns">
          <button type={'button'} className={`${theme}__group__back`} onClick={handleBack}>
            Back
          </button>
          <button type={'button'} className={`${theme}__group__create`} onClick={handleAdd}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
