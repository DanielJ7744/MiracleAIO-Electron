import React, { useContext, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { NavLink as Link } from 'react-router-dom';

/* Redux dependencies */
import { connect } from 'react-redux';
import * as actions from '../actions';

/* components*/
import Total from '../components/dashboard/Total';
import Checkout from '../components/dashboard/Checkout';
import SiteChart from '../components/dashboard/SiteChart';
import { useHorizontalScroll } from '../components/useSideScroll';

import '../styles/Dashboard.scss';
import ThemeContext from '../Context/ThemeContext';
import ReleaseImg from '../assets/dashboard/release-product.png';
import arrowRight from '../assets/dashboard/arrow-right.svg';
import arrowLightRight from '../assets/dashboard/arrow-Lightright.svg';
import showMore from '../assets/dashboard/showMore.svg';
import showLess from '../assets/dashboard/showLess.svg';
import darkDelete from '../assets/dashboard/delete-dark.png';
import { Account } from '../components/dashboard/Account';
// eslint-disable-next-line react/prefer-stateless-function
const Dashboard = () => {
  const scrollRef = useHorizontalScroll();
  const { theme } = useContext(ThemeContext);
  const [select, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const [account, setAccount] = useState(false);

  const today = new Date();
  const ReleaseMonth = today.toLocaleString('en-us', { month: 'long' });
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const daysInMonth = today.getDate();
  const AllDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function selected(i) {
    const newItem = AllDays.map((obj) => obj === i) ? i - 1 : '';
    setSelected(newItem);
  }
  const ExpandData = Array(10).fill('');

  return (
    <div className="dashboard">
      {!account ? (
        <div className={open ? 'dashboard__wrapper blur' : 'dashboard__wrapper'}>
          <div className="dash__top">
            <div className="left__dash">
              <div className={`${theme}welcomeLeft`}>
                <div className={`${theme}welcome`}>
                  <div className="left">
                    <div className="welcomeTo">Welcome to</div>
                    <div className="welcomeTo__soft">Miracle Software</div>
                    <div className="welcomeBottom">
                      <div className={`${theme}welcomeBack`}>
                        <div className="welcome__text">Welcome back</div>
                        <div className="welcome__user">Boss-1#8087</div>
                      </div>
                      <div className={`${theme}welcomeButtons`}>
                        <button type="button" className={`${theme}dashboard`}>
                          Dashboard
                        </button>
                        <button type="button" className={`${theme}account`} onClick={() => setAccount(!account)}>
                          Account
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="dashBack" />
                    <div className={`${theme}version`}>
                      <div className={`${theme}version__text`}>Version</div>
                      <div className={`${theme}version__number`}>4.0</div>
                    </div>
                  </div>
                </div>
              </div>
              <Total />
              <SiteChart />
            </div>

            <div className="right__Release">
              <div className={`${theme}Release`} style={{ padding: expand ? '15px 0px 146px 25px' : '15px 0px 0 25px' }}>
                <div className="ReleaseCalendar">
                  <div className="ReleaseDay">
                    <span className="releaseMonth">{ReleaseMonth}</span>
                    <span className="releaseCalendar">Release Calendar</span>
                  </div>
                </div>
                <div className="ReleaseDate" ref={scrollRef}>
                  {AllDays.map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div
                      className={daysInMonth === i ? 'Release__Days activeReleaseDays' : 'Release__Days'}
                      key={i}
                      onClick={() => selected(item)}
                      style={{
                        background: select === i ? 'linear-gradient(115.31deg, #CE7CFF 0%, #734BFF 100%),\n' + 'linear-gradient(0deg, #121215, #121215)' : 'transparent',
                        color: select === i ? 'white' : '#787878',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="DashboardProduct">
                  <div className="releaseProduct">
                    <div className="Release__product" style={{ padding: expand ? '20px 0' : '0px 0 20px 0' }}>
                      <div className="release__image">
                        <img src={ReleaseImg} alt="release" />
                      </div>
                      <div className="release__product_content">
                        <div className="productName">
                          <span className="productBrand">Nike</span>
                          <span className="productDetail">Travis Scott Air Jordan 1</span>
                        </div>
                        <div className="selectedReleaseDay">Wednesday, june 7th</div>
                        <div className="productMoreInfo">Join Discord for more Information !</div>
                      </div>
                      <div className="buttons__release">
                        <Link exact to="/task" className="create_task">
                          <button type="button" className="taskBtn">
                            Create Tasks
                          </button>
                          {theme === 'dark' ? <img src={arrowRight} alt="arrowRight" /> : <img src={arrowLightRight} alt="arrowRight" />}
                        </Link>
                        {expand ? (
                          <div className="ShowMore" onClick={() => setExpand(!expand)}>
                            <button type="button" className="showMoreBtn">
                              Show Less
                            </button>
                            <img src={showLess} alt="arrowRight" />
                          </div>
                        ) : (
                          <div className="ShowMore" onClick={() => setExpand(!expand)}>
                            <button type="button" className="showMoreBtn">
                              Show More
                            </button>
                            <img src={showMore} alt="arrowRight" />
                          </div>
                        )}
                      </div>
                    </div>

                    {expand ? (
                      <div className="expanded">
                        {ExpandData.map((item, index) => (
                          <div className="Release__product" key={index} style={{ padding: expand ? '20px 0' : '0px 0 20px 0' }}>
                            <div className="release__image">
                              <img src={ReleaseImg} alt="release" />
                            </div>
                            <div className="release__product_content">
                              <div className="productName">
                                <span className="productBrand">Nike</span>
                                <span className="productDetail">Travis Scott Air Jordan 1</span>
                              </div>
                              <div className="selectedReleaseDay">Wednesday, june 7th</div>
                              <div className="productMoreInfo">Join Discord for more Information !</div>
                            </div>
                            <div className="buttons__release">
                              <Link exact to="/task" className="create_task">
                                <button type="button" className="taskBtn">
                                  Create Tasks
                                </button>
                                {theme === 'dark' ? <img src={arrowRight} alt="arrowRight" /> : <img src={arrowLightRight} alt="arrowRight" />}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              {!expand ? <Checkout open={open} close={setOpen} /> : ''}
            </div>
          </div>
        </div>
      ) : (
        <Account account={account} back={() => setAccount(false)} />
      )}

      {open ? (
        <div className={`${theme}ClearModal`}>
          <div className={`${theme}Sure`}>Are you sure to clear checkout log ?</div>
          <div className="ActionButtons">
            <button className="backBtn" onClick={() => setOpen(false)}>
              Back
            </button>
            <div className="clearBtn">
              <button>Clear</button>
              {theme === 'dark' ? (
                <img src={darkDelete} alt="delete" />
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8342 3.0584C12.0611 3.0584 12.25 3.24682 12.25 3.48657V3.70823C12.25 3.94214 12.0611 4.13639 11.8342 4.13639H2.16641C1.93892 4.13639 1.75 3.94214 1.75 3.70823V3.48657C1.75 3.24682 1.93892 3.0584 2.16641 3.0584H3.86725C4.21275 3.0584 4.51343 2.81282 4.59115 2.46633L4.68022 2.0685C4.81865 1.52658 5.27421 1.16667 5.79557 1.16667H8.20442C8.72012 1.16667 9.18079 1.52658 9.31411 2.03991L9.40942 2.46574C9.48657 2.81282 9.78725 3.0584 10.1333 3.0584H11.8342ZM10.9701 11.1615C11.1476 9.50662 11.4585 5.57499 11.4585 5.53533C11.4699 5.41516 11.4307 5.30141 11.353 5.20983C11.2696 5.12408 11.1641 5.07333 11.0478 5.07333H2.95663C2.83976 5.07333 2.72856 5.12408 2.65141 5.20983C2.57312 5.30141 2.53454 5.41516 2.54021 5.53533C2.54125 5.54262 2.55241 5.68111 2.57106 5.91264C2.65391 6.9412 2.88467 9.80594 3.03378 11.1615C3.1393 12.1602 3.79456 12.7878 4.74369 12.8106C5.4761 12.8275 6.23064 12.8333 7.0022 12.8333C7.72894 12.8333 8.46703 12.8275 9.22213 12.8106C10.2042 12.7937 10.8589 12.1771 10.9701 11.1615Z"
                    fill="#363636"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

/**
 * maps reducer state to react props
 *
 * @param {any} state - reducer state
 *
 */
const mapStateToProps = () => ({});

export default connect(mapStateToProps, actions)(hot(Dashboard));
