// @flow
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import masterCard from '../../assets/dashboard/masterCard.svg';
import copy from '../../assets/dashboard/copy.svg';
import user from '../../assets/dashboard/user.png';
import '../../styles/Account.scss';
export const Account = (props) => {
  console.log(props);
  let { account, back }= props;
  const { theme } = useContext(ThemeContext);
  function dashboard (){
    back(true);
  }
  return (
    <div className={`${theme}Account`}>
      <div className={`${theme}AccountHeader`}>
        <span className={`${theme}__Title`}>Welcome back to</span>
        <span className={`${theme}__subTitle`}>Miracle Software</span>
      </div>
      <div className='AccountBody'>
        <div className={`${theme}Info`}>
          <div className={`${theme}__info`}>
            <span className="__title">Account Information</span>
            <span className="__user">Boss-1</span>
          </div>
          <div className={`${theme}__info__action`}>
            <button title='button' onClick={dashboard} className={`${theme}__dashBtn`}>Dashboard</button>
            <button title='button' onClick={dashboard} className={`${theme}__dashAccount`}>Account</button>
          </div>
        </div>
        <div className={`${theme}InfoDetail`}>
          <div className={`${theme}__info_month`}>
            <img src={user} alt='user' className="user"/>
            <span>Monthly</span>
          </div>
          <div className={`${theme}__info_user`}>
            <span className="discordUser">Boss-1#8087</span>
            <div>
              <div className="from">User Since</div>
              <div className="fromDay">DD.MM.YYYY</div>
            </div>

          </div>
          <div className={`${theme}__info_license`}>
            <span className={`${theme}__licenseKey`}>License Key </span>
            <span className={`${theme}__license`}>
              <input type='text' placeholder={'12345-ABCDE-12345-ABCDE'} />
              <img src={copy} alt='copy' />
            </span>
          </div>
        </div>
        <div className={`${theme}InfoCharge`}>
          <div className={`${theme}__nextCharge`}>
            <span>Next Charge</span>
            <div className={`${theme}__nextDay`}>
              DD.MM.YYYY
            </div>
          </div>
          <div className={`${theme}__remainDay`}>
            <div className={`${theme}__days__info`}>
              <span className="remainDay">23 Days</span>
              <span className="cardInfo">
                <img src={masterCard} alt='' />
                <span>1234</span>
              </span>
            </div>
            <div className="__dayInfo">
              <span className="__dayBg">
                <span />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='AccountFooter'>
          <button type={'button'} className="backBtn" onClick={dashboard}>Back</button>
      </div>

    </div>
  );
};
